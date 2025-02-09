DROP TABLE IF EXISTS dev_logs;

CREATE TABLE dev_logs (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	user_id INTEGER NOT NULL,
	title varchar(255) NOT NULL,
	body TEXT NOT NULL,
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO dev_logs (title, body, created_at, user_id) VALUES ('241031 금', '

오늘은 탭을 만들었다. 메인, 독후감, 일상 세가지의 카테고리에 대한 기록이 필요할 것 같다. 일상 카테고리는 조금 추상적인 느낌이 있지만.. 앞으로 쓰면서 조금씩 구체화시켜보려한다.

그리고 어제 개발한 내용들을 오늘 이어서 하려고 커밋을 안하고 잤는데 앞으로는 아무리 한게없는 것 같더라도 꼭 그날 결과물을 기록으로 남기고 자야겠다. 어제의 내 발자국들을 갈무리 짓는 것도 꽤 품이 드는 일이라고 느꼈다.

내일은 시간도 재면서 개발해봐야지. 시간 개념이 너무 없다.. 개발하는게 귀찮다가도 만들다보면 또 꽤 재밌어서 시계 안보게된다 ㅋㅋㅋ

마지막으로 width를 적용하는게 나는 고민인게 최상위 컴포넌트에서 width를 vw로 잡아놓고 하위 컴포넌트에서 %로 조절하는 방식을 쓰고 있는데, 이렇게 쓰면 어그러지나..? 규모가 있는 개발조직에서는 이럴 때 어떻게 하는지 궁금했다.
', '2024-10-31 00:00:00', 1);

INSERT INTO dev_logs (title, body, created_at, user_id) VALUES ('241101 금', '
- 배경 색에 대한 고민을 했다. 검정, 회색, 흰색으로 무난하게 가려다가 뭔가 눈이 덜 피로하게 하는 방법이 있지않을까 하고 색조합을 찾아보니 녹색계열이 피로감을 덜어준다고 하는데 막상 이런저런 녹색들을 적용해봤더니 뭔가 이상한 느낌이라 그냥.. 욕심을 버리기로 했다.
- 사용자 입장에서 보기 편한 width도 있지않을까? 하는 생각이 들었고 또 medium이나 블로그들을 보면 양쪽엔 여백을 가득 두고 가운데에 400후반대에서 800쯤안되는..? 정도의 폭을 유지하는 경향을 보고 왜 그렇게 하는지 궁금했다. 컨텐츠의 길이가 길어지면 사용자들은 고개를 약간씩 돌려야해서 이때 인지부하가 발생한다고 한다. [참고](https://surferseo.com/blog/how-to-design-blog/) 어쨌든 나도 마진을 양쪽에 주어서 폭이 너무 넓어지지 않게 제한을 두어보았다.
- 탭의 위치를 어젠 왼쪽상단에 두었는데 오른쪽 상단으로 옮겼다. 그냥 내 감으로 그렇게 한거긴한데, 왼쪽 상단부터 글을 읽기 시작하는데 그 부근에 컨텐츠가 너무 많게 느껴져서 약간 불편했다. 그래서 필요할 때만 찾는 기능인 탭은 오른쪽 상단으로 옮겨서 글을 읽을 때 방해되지 않도록 배치했다.
', '2024-11-01 00:00:00', 1);

INSERT INTO dev_logs (title, body, created_at, user_id) VALUES ('241102 토', '
- 레포지토리에 개발일지.md 파일을 하나 만들어두고 쓰고 있는데 이걸 자동으로 불러와서 home에 보여주는 기능을 추가했다.
  - 파일 입출력으로 개발일지를 읽고 해당 내용을 반환하는 api를 만들었다.
  - 컴포넌트가 마운트 될 때 한번만 호출되게끔 하기위해서 useEffect를 사용하되, 의존성은 주지않고 빈 배열로 남겨두었다.
- md파일을 mdx로 인식하게하는 기능 추가
- 약간의 스타일 수정', '2024-11-02 00:00:00', 1);

INSERT INTO dev_logs (title, body, created_at, user_id) VALUES ('241104 월', '
- CSS를 수정했다. float를 쓰려고 이리저리 애쓰다가 불편해서 그냥 flex box로 바꿨다.
- flex-grow가 적용이 안되길래 한참 헤맸다.. copilot한테 바로 물어보면 금세 해결됐을텐데 고집(?) 부리다가 결국 덕분에 flex-basis로 기본 너비를 설정해주지 않아서 적용이 안되던 문제임을 인지했다.
- 현재 사용하고 있는 데이터는 tabContent라는 json 데이터 하나가 있는데, 추후에 코드가 좀 더 복잡해지면 리팩토링으로 컴포넌트화 할 때 데이터를 props로 내려주기 편리하게끔 (주관적 판단..) 수정했다.', '2024-11-04 00:00:00', 1);

INSERT INTO dev_logs (title, body, created_at, user_id) VALUES ('241105 화', '
- 동적 라우팅과 린터 설정을 하다가 시간이 다갔다.. 두가지를 한번에 하려고 하다보니 생각이 꼬인 것 같다. 개발 능률이 나지 않는다는 이유로 린터설정을 하고 있으면 개발하는 시간이 부족한 것 같고 개발을 그냥 하자니 코드 형식 수정하는데 시간을 너무 많이 들이는 듯해서 신경쓰이고... 내일 한가지씩 다시 도전해봐야겠다. 아무도 쫓아오는 사람 없으니까 하나씩 천천히 해보기.
', '2024-11-05 00:00:00', 1);

INSERT INTO dev_logs (title, body, created_at, user_id) VALUES ('241106 수', '- ESLint 설정 파일인 .eslintrc.json에 있는 key별 역할을 배웠다.

  - root: 디렉토리별로 다른 eslint 옵션을 주고 싶을 때 사용하고 아래와 같이 활용할 수 있다고 한다.

    예:

    ```bash

      home
    └── user
        └── projectA
            ├── .eslintrc  <- Not used
            └── lib
                ├── .eslintrc  <- { "root": true }
                └── main.js
    ```

  - plugin: 사용할 플러그인을 import 하는 개념으로 이해했다.

    예시:

    ```json
    "plugins": ["@typescript-eslint", "prettier"]
    ```

  - extents: ESLint 설정을 확장할 기능을 설정. ESLint 자체의 기능과 플러그인에 있는 기능들 중에서 사용할 기능들을 명시해준다고 이해했다.

    예시:

    ```json
    "extends": [
      "eslint:recommended",
      "plugin:@typescript-eslint/recommended",
      "prettier"
    ]
    ```

  - rules: ESLint 규칙을 설정하거나 재정의

    - `off` or `0`: 규칙 끔
    - `warn` or `1`: 경고
    - `error` `2`: 오류

    예시:

    ```json
    "rules": {
      "@typescript-eslint/strict-boolean-expressions": [
        "error",
        {
          "allowString": false,
          "allowNumber": false
        }
      ],
      "prettier/prettier": "error"
    }
    ```

  - parser: ESLint가 코드 를 분석할 때 사용할 파서. TypeScript와 같은 다른 언어 지원하기 위해 사용할 수 있음.

    예시:

    ```json
    "parser": "@typescript-eslint/parser"
    ```

  - parserOptions: parserOptions 옵션은 파서에 대한 추가 옵션

    예시:

    ```json
    "parserOptions": {
      "ecmaVersion": 2021,
      "sourceType": "module",
      "ecmaFeatures": {
        "jsx": true
      },
      "project": ["./tsconfig.json"]
    }
    ```

  - ignorePatterns: ESLint가 무시할 파일이나 디렉토리 패턴을 지정

    예시:

    ```json
    "ignorePatterns": ["src/**/*.test.ts", "src/frontend/generated/*"]
    ```

- 현재는 ESLint와 Prettier, typescript-eslint/paser플러그인을 함께 사용하도록 설정했다. 근데 Prettier와 TypeScript만 쓰는 방법도 있다고 해서 1~2주씩 설정을 달리해서 차이를 느껴보고 싶다는 생각을 했다.

  - cf. [X, 구 트위터 타래](https://x.com/doomydoomydooms/status/1854018159264796684)

- 포매팅에 성공했는데 개행을 두줄 이상하고 저장하면 꼭 한줄의 공백 개행이 남길래 불편하다고 느껴져서 이리저리 검색하다보니 신기하게도 POSIX의 표준을 알게됐다. IEEE에서 만든 표준이라고하는데 [모든 파일은 마지막에 공백이 하나 있어야한다고 한다.](https://stackoverflow.com/questions/61193625/prettier-not-formatting-empty-line-properly)
  - cf. [X, 구 트위터 타래](https://x.com/sarcasticfringh/status/1854031188161359948)
- 개발 못했는데 하루가 가서 살짝 아쉬웠다.
- `export const dynamic = "force-dynamic";` cloudflare를 사용하려고 static output퍄일이 build되게 했었는데 이 설정과 `export const dynamic = "force-dynamic";`은 함께 사용할 수 없어서 문제가 되었다.
', '2024-11-06 00:00:00', 1);

INSERT INTO dev_logs (title, body, created_at, user_id) VALUES ('241111 월', '
- 스타일 수정
  - 단락 비율 조정
  - 스크롤 바 안보이게 수정
- 탭을 공통 컴포넌트로 추상화 시키기
', '2024-11-11 00:00:00', 1);

INSERT INTO dev_logs (title, body, created_at, user_id) VALUES ('241112 화', '
⨯ Error: export const dynamic = "force-dynamic" on page "/api" cannot be used with "output: export". See more info here: https://nextjs.org/docs/advanced-features/static-html-export
- 에러원인: cloud flare 빌드를 위해서 나는 static file들을 빌드 결과물로 만들어내는 옵션을 사용하고 있었다. const dynamic = "force-dynamic"와 함께 사용하지 못해서 발생한 에러. dynamic을 왜 사용하게되었는지 기록을 안해놨더니 잊어버렸다. 다음부턴 좀 더 작은 단위로 개발하고 기록하기를 해야겠다.
- 해결방법: 두옵션 모두 제거했더니 동작하는 상황이다.
', '2024-11-12 00:00:00', 1);

INSERT INTO dev_logs (title, body, created_at, user_id) VALUES ('241113 수', '
- https://github.com/cloudflare/next-on-pages/issues/520
- 아래와 같은 에러를 만났는데 한글로 파일명을 변수로 넘겨주니까 인코딩(?)이 깨지는 것 같아서 그냥 임시방편으로 변수를 제거했더니 동작은 한다. 어떻게 리팩토링 해야하는지 찾아봐야할듯.
  GET /api?fileName=$%EA%B0%9C%EB%B0%9C%EC%9D%BC%EC%A7%80 500 in
- ~~cloudflare 놓고 vercel에서 배포하게 바꿨다. 이유는 배포하려면 모듈도 하나 설치하고 (@cloudflare/next-on-pages), `export const rundtime = "edge"` 뭐 이런 코드도 `getServerSideProps` 쓰는 파일에 넣어줘야한다고 설명이 나와있어서 그대로 해봤더니 안됨. Edge Runtime이 경량화된 환경이라서 일부 Node.js API를 지원 안할 수 있다길래.. 그냥 cloudflare 포기하고 vercel 쓰기로 했다. 어차피 뭐 큰사이트 운영할것도 아니니.. ㅠㅠ 그래도 찝찝하니까 짬날때마다 cloudflare에 업로드하는 시도는 해보려고 한다.~~
  - 공식문서 안보고 [유튜브](https://youtu.be/A49jpNN4omY?si=tw6kctGNys3S6Prk) 보고 했는데 [친절한 공식 문서](https://developers.cloudflare.com/pages/framework-guides/nextjs/ssr/get-started/)를 발견해서 이걸 보고 하니까 해결됐다.ㅠㅠ 순서 몇개 빼먹어서 안된 듯하다.
  - runtime을 edge로 하면 지원 안되는 node module이 있단 것도 배웠다. 파일 입출력 모듈을 쓰고 있었는데 나중에 DB로 바꿀거라는 핑계로 얼레벌레 짜둔 코드를 갈아 치울 타이밍이 온 것 같다.
- SQLite를 설치했다. supabase 쓸까하다가 이것도 일단 어차피 내가 글을 뭐 얼마나 쓸라나 싶어서 기술을 최소화해서 쓰는 방향으로 선택해봤다.
', '2024-11-13 00:00:00', 1);

INSERT INTO dev_logs (title, body, created_at, user_id) VALUES ('241115 금', '
- sqlite DB 커넥션 추가, 테이블 생성
- 2일 전에 커밋하고 원격으로 푸시한 이후에 DB 관련 작업 커밋이 로컬에 있는줄 알고 --amend 옵션으로 커밋을 했다가 non-fast-forward 에러를 마주쳤다.
', '2024-11-15 00:00:00', 1);

INSERT INTO dev_logs (title, body, created_at, user_id) VALUES ('241119 화', '
- sqlite는 cloudflare에 올릴 수 있는게 아니다. 아마존의 EC2를 사용했을 때가 많았어서 sqlite를 원격 서버에서 구동해야하는 형태인줄 알았는데 Cloudflare D1은 그냥 DB자체를 제공하는 개념이였다.
- SQL문을 작성해서 테이블을 생성하고 기존에 가지고 있던 데이터들을 D1에 삽입할 수 있게끔 만들었다.
', '2024-11-15 00:00:00', 1);
