import { headers } from 'next/headers';
import styles from './page.module.scss';

const Book = async () => {
  const headersData = await headers();
  const pathname = headersData.get('x-next-pathname') as string;

  return (
    <>
      <section className={styles.left}>
        <h1>{pathname === '/book' ? '개발일지' : ''}</h1>
        <br />
        <p>{pathname === '/book' ? '천천히, 조금씩, 꾸준히 🛠️' : ''}</p>
      </section>
      <section className={styles.right}></section>
    </>
  );
};

export default Book;
