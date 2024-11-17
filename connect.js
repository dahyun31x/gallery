const createTables = [
  {
    name: 'users',
    query: `
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY,
        name VARCHAR,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `,
  },
  {
    name: 'dev_logs',
    query: `
      CREATE TABLE IF NOT EXISTS dev_logs (
        id INTEGER PRIMARY KEY,
        title VARCHAR,
        body TEXT,
        user_id INTEGER,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users(id)
      );
    `,
  },
  {
    name: 'book_reports',
    query: `
      CREATE TABLE IF NOT EXISTS book_reports (
        id INTEGER PRIMARY KEY,
        title VARCHAR,
        body TEXT,
        user_id INTEGER,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users(id)
      );
    `,
  },
];

// 기존 데이터 삽입용 JSON 배열
const devLogs = [
  {
    title: '241115 금',
    body: `
- sqlite DB 커넥션 추가, 테이블 생성
- 2일 전에 커밋하고 원격으로 푸시한 이후에 DB 관련 작업 커밋이 로컬에 있는줄 알고 --amend 옵션으로 커밋을 했다가 non-fast-forward 에러를 마주쳤다.
    `,
    createdAt: '241115',
  },
  {
    title: '241113 수',
    body: `
- [ ] TODO: https://github.com/cloudflare/next-on-pages/issues/520
- 아래와 같은 에러를 만났는데 한글로 파일명을 변수로 넘겨주니까 인코딩(?)이 깨지는 것 같아서 그냥 임시방편으로 변수를 제거했더니 동작은 한다. 어떻게 리팩토링 해야하는지 찾아봐야할듯.
  GET /api?fileName=$%EA%B0%9C%EB%B0%9C%EC%9D%BC%EC%A7%80 500 in
- ~~cloudflare 놓고 vercel에서 배포하게 바꿨다. 이유는 배포하려면 모듈도 하나 설치하고 (@cloudflare/next-on-pages), export const rundtime = "edge" 뭐 이런 코드도 getServerSideProps 쓰는 파일에 넣어줘야한다고 설명이 나와있어서 그대로 해봤더니 안됨. Edge Runtime이 경량화된 환경이라서 일부 Node.js API를 지원 안할 수 있다길래.. 그냥 cloudflare 포기하고 vercel 쓰기로 했다. 어차피 뭐 큰사이트 운영할것도 아니니.. ㅠㅠ 그래도 찝찝하니까 짬날때마다 cloudflare에 업로드하는 시도는 해보려고 한다.~~
  - 공식문서 안보고 유튜브 보고 했는데 친절한 공식 문서를 발견해서 이걸 보고 하니까 해결됐다.ㅠㅠ 순서 몇개 빼먹어서 안된 듯하다.
  - runtime을 edge로 하면 지원 안되는 node module이 있단 것도 배웠다. 파일 입출력 모듈을 쓰고 있었는데 나중에 DB로 바꿀거라는 핑계로 얼레벌레 짜둔 코드를 갈아 치울 타이밍이 온 것 같다.
- SQLite를 설치했다. supabase 쓸까하다가 이것도 일단 어차피 내가 글을 뭐 얼마나 쓸라나 싶어서 기술을 최소화해서 쓰는 방향으로 선택해봤다.
    `,
    createdAt: '241113',
  },
  {
    title: '241112 화',
    body: `
⨯ Error: export const dynamic = "force-dynamic" on page "/api" cannot be used with "output: export". See more info here: https://nextjs.org/docs/advanced-features/static-html-export
- 에러원인: cloud flare 빌드를 위해서 나는 static file들을 빌드 결과물로 만들어내는 옵션을 사용하고 있었다. const dynamic = "force-dynamic"와 함께 사용하지 못해서 발생한 에러. dynamic을 왜 사용하게되었는지 기록을 안해놨더니 잊어버렸다. 다음부턴 좀 더 작은 단위로 개발하고 기록하기를 해야겠다.
- 해결방법: 두옵션 모두 제거했더니 동작하는 상황이다.
    `,
    createdAt: '241112',
  },
  {
    title: '241111 월',
    body: `
- 스타일 수정
  - 단락 비율 조정
  - 스크롤 바 안보이게 수정
- 탭을 공통 컴포넌트로 추상화 시키기
    `,
    createdAt: '241111',
  },
  {
    title: '241104 수',
    body: `
- ESLint 설정 파일인 .eslintrc.json에 있는 key별 역할을 배웠다.
  - root: 디렉토리별로 다른 eslint 옵션을 주고 싶을 때 사용하고 아래와 같이 활용할 수 있다고 한다.
    예:
    `,
    createdAt: '241104',
  },
];

function parseDate(dateString) {
  const year = parseInt(dateString.slice(0, 2), 10) + 2000; // 2000년대 기준으로 연도 계산
  const month = parseInt(dateString.slice(2, 4), 10) - 1; // 월은 0부터 시작하므로 1을 빼줌
  const day = parseInt(dateString.slice(4, 6), 10);

  return new Date(year, month, day);
}

function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // 월은 0부터 시작하므로 1을 더함
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database(
  './gallery.db',
  sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
  (err) => {
    if (err) {
      return console.error(err.message);
    } else {
      console.log('Connected to the SQLite database.');
    }
  },
);

// devlog createdAt 값을 datestamp로 바꾸기
devLogs.forEach((log) => {
  log.createdAt = formatDate(parseDate(log.createdAt)); // 형식 변환
});

db.serialize(() => {
  createTables.forEach((table) => {
    db.run(table.query, (err) => {
      if (err) {
        return console.error(err.message);
      }
      console.log(`Table '${table.name}' created successfully.`);
    });
  });

  const name = '김다현';
  db.run(`INSERT INTO users (name) VALUES ('${name}')`, (err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log(`Inserted ${name} into users table`);
  });

  const insertQuery = `
    INSERT INTO dev_logs (title, body, created_at, user_id)
    VALUES (?, ?, ?, 1)
  `;
  devLogs.forEach((entry) => {
    db.run(insertQuery, [entry.title, entry.body, entry.createdAt], (err) => {
      if (err) {
        return console.error(err.message);
      }
      console.log(`Inserted entry: ${entry.title}`);
    });
  });
});
