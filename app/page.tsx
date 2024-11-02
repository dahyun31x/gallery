"use client";

import React, { useEffect, useState } from "react";
import styles from "./page.module.scss";

export default function Page() {
  const [devLogContent, setDevLogContent] = useState<string>("");

  useEffect(() => {
    fetch('/api')
      .then(response => response.json())
      .then(data => setDevLogContent(data.content))
      .catch(error => console.error('Error fetching dev log:', error));
  }, []);

  const tabData = [
    { btn: "일상 🏃‍♀️", content: "example 2" },
    { btn: "독후감 📚", content: "example 1" },
    { btn: "홈 🏡", content: (
      <>
        <h1>블로그 홈</h1><br/>
        <p>어서오세요</p>
        <div dangerouslySetInnerHTML={{ __html: devLogContent }} />
      </>
    ) },
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
          {tabData[activeTab].content}
        </div>
      </div>
    </div>
  );
}