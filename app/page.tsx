'use client';

import styles from './page.module.scss';

export default function Page() {
  const tabData = [
    {
      btn: '일상 🏃‍♀️',
      content: 'example 2',
      name: '일상',
      desc: '기록 한 조각',
    },
    {
      btn: '독후감 📚',
      content: 'example 독후감',
      name: '독후감',
      desc: '오늘의 단락',
    },
    {
      btn: '홈 🏡',
      content: 'example 홈',
      name: '홈',
      desc: '환영해요 ദ്ദിᐢ- ̫-ᐢ₎',
    },
  ];

  return (
    <div className={styles.root}>
      <div className={styles.tabListContentWrapper}>
        <div className={styles.tabContent}>
          <section>
            <h1>{tabData[2].name}</h1>
            <br />
            <p>{tabData[2].desc}</p>
          </section>
          <div className={styles.homeContent}>{tabData[2].content}</div>
        </div>
      </div>
    </div>
  );
}
