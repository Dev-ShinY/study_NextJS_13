# study_NextJS_13

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## strudy next.js 13

```
13에서 다른 점.
```

- TURBOPACK

  - Rust로 만든 JS 번들링툴

    - 번들링이란,

      > 모듈화 프로그래밍시, 소프트웨어가 커지면 커질 수록 각각의 세분화된 모듈 파일이 늘어나고, 이러한 모듈 단위의 파일들 신경써야하는데 이러한 문제들을 바탕으로 나온 것이 웹팩의 **번들링** 개념이다.

    - 번들링의 기능을 지원하는 번들러 중, RequireJS, Browserify, Rollup, Parcel 등이 있지만, 대표적으로 많이 쓰는 것은 Webpack 이다.

- app/ Directory (beta)

  - pages 디렉터리 내의 next routing 구조는 전과 동일하게 유지되므로 12버전 그대로 사용해도 무방
  - app
    - dashboard (폴더 구조로 라우팅)
      - page.tsx
    - head.tsx
    - layout.tsx

- getServerSideProps 방식

  - 기존

    ```typescript
    export async function getServerSideProps() {
      const res = await fetch("api link");
      const data = await res.json();
      return { props: { data } };
    }
    ```

    - 변경 후

    ```typescript
    import { use } from "react";

    export default function Page() {
      var data = use(myFunction());
      return <div> 페이지 입니다. </div>;
    }

    export async function myFunction() {
      const res = await fetch("api link", {
        /* cache: "no-store", // getServerSideProps()와 유사하게 사용 가능 */
      });
      const data = await res.json();
      return { props: { data } };
    }
    ```

- next/image
  - Layout Shift
    - 이미지 로드가 늦게 되면 이미지 보다 페이지 아래에 있는 레이아웃이 밀리는 현상
  - 이전 버전의 next/image 컴포넌트는 next/legacy/image로 변경
- next/font
  - 커스텀 폰트를 포함하여 글꼴을 자동으로 최적화
- next/link
  - next/link는 더이상 자식요소로 <a>태그를 사용하지 않음.
