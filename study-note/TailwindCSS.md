# <div align="center">🧚🏻 TailwindCSS</div>

<br>

## Tailwind 설치

```bash
# 개발용으로 tailwindcss 설치
npm install -D tailwindcss
npx tailwindcss init
```

<br>

**`tailwind.config.js`**
content 부분에 우리가 쓰는 파일 경로를 가져오기

```js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

<br>

**`index.js`**

```js
@tailwind base;
@tailwind components;
@tailwind utilities;
```

이제 tailwind 를 사용할 수 있다!

<br>

### 라이브러리에 기존에 있던 스타일 클래스명을 가져다 스타일을 적용시킬 수 있다.

<br>

### 익스텐션 추가 설치 : Tailwind CSS Intellisense

- 컬러 색상이나 힌트 등을 표시할 수 있다.
