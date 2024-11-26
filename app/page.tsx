// import { useEffect, useState } from 'react';
import styles from './page.module.scss';

const fetchData = async () => {
  if (!process.env.DB_HOST || !process.env.DB_DEVLOG_PATH) {
    throw new Error(
      'Environment variables DB_HOST or DB_DEVLOG_PATH must be defined',
    );
  }
  const dynamicData = await fetch(
    `${process.env.DB_HOST}${process.env.DB_DEVLOG_PATH}`,
    {
      cache: 'force-cache',
    },
  );
  const devLogs = await dynamicData.json();

  return devLogs;
};

export default async function Page() {
  const devLogs = await fetchData();

  const child = devLogs.map(
    (log: { title: string; body: string }, idx: number) => (
      <section key={idx} className={styles.homeContent}>
        <h2>{log.title}</h2>
        <p>{log.body}</p>
      </section>
    ),
  );

  return (
    <div className={styles.root}>
      <div className={styles.tabListContentWrapper}>
        <div>
          <section>
            <h1>{'홈'}</h1>
            <br />
            <p>{'환영해요 ദ്ദിᐢ- ̫-ᐢ₎'}</p>
          </section>
          {child}
        </div>
      </div>
    </div>
  );
}
