"use client";

import React, { useState } from "react";
import styles from "./page.module.scss";

export default function Page() {
  const tabData = [
    { btn: "일상 🏃‍♀️", content: "example 2" },
    { btn: "독후감 📚", content: "example 1" },
    { btn: "홈 🏡", content: <><h1>블로그 홈</h1><br/>
      <p>어서오세요</p>
      <h1>개발일지 </h1>
      <h2>241031 목</h2>
      <p>
      오늘은 탭을 만들었다. 메인, 독후감, 일상 세가지의 카테고리에 대한 기록이 필요할 것 같다. 일상 카테고리는 조금 추상적인 느낌이 있지만.. 앞으로 쓰면서 조금씩 구체화시켜보려한다.  

      그리고 어제 개발한 내용들을 오늘 이어서 하려고 커밋을 안하고 잤는데 앞으로는 아무리 한게없는 것 같더라도 꼭 그날 결과물을 기록으로 남기고 자야겠다. 어제의 내 발자국들을 갈무리 짓는 것도 꽤 품이 드는 일이라고 느꼈다.

      내일은 시간도 재면서 개발해봐야지. 시간 개념이 너무 없다.. 개발하는게 귀찮다가도 만들다보면 또 꽤 재밌어서 시계 안보게된다 ㅋㅋㅋ 

      마지막으로 width를 적용하는게 나는 고민인게 최상위 컴포넌트에서 width를 vw로 잡아놓고 하위 컴포넌트에서 %로 조절하는 방식을 쓰고 있는데, 이렇게 쓰면 어그러지나..? 규모가 있는 개발조직에서는 이럴 때 어떻게 하는지 궁금했다. 
      </p>
      <h2>241101 금</h2>
      <ul>
        <li>배경 색에 대한 고민을 했다. 검정, 회색, 흰색으로 무난하게 가려다가 뭔가 눈이 덜 피로하게 하는 방법이 있지않을까 하고 색조합을 찾아보니 녹색계열이 피로감을 덜어준다고 하는데 막상 이런저런 녹색들을 적용해봤더니 뭔가 이상한 느낌이라 그냥.. 욕심을 버리기로 했다. </li>
        <li>사용자 입장에서 보기 편한 width도 있지않을까? 하는 생각이 들었고 또 medium이나 블로그들을 보면 양쪽엔 여백을 가득 두고 가운데에 400후반대에서 800쯤안되는..? 정도의 폭을 유지하는 경향을 보고 왜 그렇게 하는지 궁금했다. 컨텐츠의 길이가 길어지면 사용자들은 고개를 약간씩 돌려야해서 이때 인지부하가 발생한다고 한다. [참고](https://surferseo.com/blog/how-to-design-blog/) 어쨌든 나도 마진을 양쪽에 주어서 폭이 너무 넓어지지 않게 제한을 두어보았다.</li>
        <li>탭의 위치를 어젠 왼쪽상단에 두었는데 오른쪽 상단으로 옮겼다. 그냥 내 감으로 그렇게 한거긴한데, 왼쪽 상단부터 글을 읽기 시작하는데 그 부근에 컨텐츠가 너무 많게 느껴져서 약간 불편했다. 그래서 필요할 때만 찾는 기능인 탭은 오른쪽 상단으로 옮겨서 글을 읽을 때 방해되지 않도록 배치했다. </li>
      </ul>
    </> },
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