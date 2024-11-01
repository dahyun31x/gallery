"use client";

import React, { useState } from "react";
import styles from "./page.module.scss";

export default function Page() {
  const tabData = [
    { btn: "일상 🏃‍♀️", content: "example 2" },
    { btn: "독후감 📚", content: "example 1" },
    { btn: "홈 🏡", content: <><h1>블로그 홈</h1><br/><p>어서오세요</p></> },
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

        <div className={styles.content}>{tabData[activeTab].content}</div>
        <div></div>
      </div>
    </div>
  );
}