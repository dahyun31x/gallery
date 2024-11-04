"use client";

import React, { useEffect, useState } from "react";
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import styles from "./page.module.scss";

export default function Page() {
  const [mdxContent, setMdxContent] = useState<MDXRemoteSerializeResult | null>(null);

  useEffect(() => {
    fetch('/api')
      .then(response => response.json())
      .then(async data => {
        const mdxSource = await serialize(data.content);
        setMdxContent(mdxSource);
      })
      .catch(error => console.error('Error fetching dev log:', error));
  }, []);

  const tabData = [
    { btn: "일상 🏃‍♀️", content: "example 2", name: "일상", desc: "기록 한 조각" },
    { btn: "독후감 📚", content: "example 1", name: "독후감", desc: "오늘의 단락"},
    { btn: "홈 🏡", content: mdxContent ? <MDXRemote {...mdxContent} /> : null, name:"홈", desc: "환영해요 ദ്ദിᐢ- ̫-ᐢ₎" },
  ];

  const [activeTab, setActiveTab] = useState(2);

  return (
    <div className={styles.root}>
      <div className={styles.tabListContentWrapper}>
        <ul className={styles.tabList}>
          {tabData.map((tab, index) => (
            <li
              key={index}
              className={index === activeTab ? styles.activeTab : ""}
              onClick={() => setActiveTab(index)}
            >
              {tab.btn}
            </li>
          ))}
        </ul>
        <div className={styles.tabContent}>
          <section>
            <h1>{tabData[activeTab].name}</h1><br/>
            <p>{tabData[activeTab].desc}</p>
          </section>
          <div className={styles.homeContent}>
            {tabData[activeTab].content}
          </div>
        </div>
      </div>
    </div>
  );
}