'use client';

import React, { useEffect, useState } from 'react';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import styles from './page.module.scss';

export default function Page() {
  const [mdxContent, setMdxContent] = useState<MDXRemoteSerializeResult | null>(
    null,
  );

  const fetchMdxContent = async () => {
    try {
      const response = await fetch(`/api?fileName=개발일지`);
      const data = await response.json();
      const mdxSource = await serialize(data.content);
      setMdxContent(mdxSource);
    } catch (error) {
      console.error('Error fetching MDX content:', error);
    }
  };

  useEffect(() => {
    fetchMdxContent();
  }, []);

  const tabData = [
    {
      btn: '일상 🏃‍♀️',
      content: 'example 2',
      name: '일상',
      desc: '기록 한 조각',
    },
    {
      btn: '독후감 📚',
      content: mdxContent ? <MDXRemote {...mdxContent} /> : null,
      name: '독후감',
      desc: '오늘의 단락',
    },
    {
      btn: '홈 🏡',
      content: mdxContent ? <MDXRemote {...mdxContent} /> : null,
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
