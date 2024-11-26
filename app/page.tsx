import { headers } from 'next/headers';
import styles from './page.module.scss';

const fetchData = async () => {
  const dynamicData = await fetch(
    `${process.env.DB_HOST}${process.env.DB_DEVLOG_PATH}`,
    {
      cache: 'no-cache',
    },
  );
  const devLogs = await dynamicData.json();

  return devLogs;
};

export default async function Page() {
  const devLogs = await fetchData();
  const headersData = await headers();
  const pathname = headersData.get('x-next-pathname') as string | null;

  return (
    <>
      <section className={styles.left}>
        <h1>{pathname === '/' ? '홈' : '개발일지'}</h1>
        <br />
        <p>{pathname === '/' ? '환영합니다' : '천천히, 조금씩, 꾸준히 🛠️'}</p>
      </section>
      <section className={styles.right}>
        {devLogs.map((log: { title: string; body: string }, idx: number) => (
          <div key={idx} className={styles.homeContent}>
            <h2>{log.title}</h2>
            <p>{log.body}</p>
          </div>
        ))}
      </section>
    </>
  );
}
