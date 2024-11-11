'use client';

import React, { useEffect, useState } from 'react';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import styles from './page.module.scss';

export default function Page() {
  const [mdxContent, setMdxContent] = useState<MDXRemoteSerializeResult | null>(
    null,
  );
  const [activeTab, setActiveTab] = useState(2);

  const fetchMdxContent = async (fileName: string) => {
    try {
      const response = await fetch(`/api?file=${fileName}`);
      const data = await response.json();
      const mdxSource = await serialize(data.content);
      setMdxContent(mdxSource);
    } catch (error) {
      console.error('Error fetching MDX content:', error);
    }
  };

  useEffect(() => {
    fetchMdxContent('개발일지'); // 기본값으로 '개발일지.md' 파일을 불러옴
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

  const handleTabClick = (index: number, fileName: string) => {
    setActiveTab(index);
    fetchMdxContent(fileName);
  };

  return (
    <div className={styles.root}>
      <div className={styles.tabListContentWrapper}>
        <div className={styles.tabContent}>
          <section>
            <h1>{tabData[activeTab].name}</h1>
            <br />
            <p>{tabData[activeTab].desc}</p>
          </section>
          <div className={styles.homeContent}>{tabData[activeTab].content}</div>
        </div>
      </div>
    </div>
  );
}

// TODO: Header 컴포넌트에 page.tsx에서 사용하고 있는 탭 컴포넌트를 옮기기
// TODO: book 컴포넌트 디렉토리에 있는 파일 불러오게하는 코드 작성하기 + API 라우트 추가
