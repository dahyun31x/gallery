"use client";

import React, { useState } from "react";
import styles from "./profile.module.scss";

export default function Profile() {
  const tabData = [
    { btn: "메인 🏡", content: "example 0" },
    { btn: "독후감 📚", content: "example 1" },
    { btn: "일상 🏃‍♀️", content: "example 2" },
  ];

  const [activeTab, setActiveTab] = useState(0);

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
        <div className={styles.tabContent}>
          {tabData[activeTab].content}
        </div>
      </div>
      </div>
    </div>
  );
}