# <div align="center">🧚🏻 PostCSS : 리액트에서 사용할 수 있는 스타일</div>

<br>

## Post CSS

CSS 파일을 각기 다르게 만들어도 클래스명이 같으면 스타일이 중첩된다.

<br>

.button 이 아니라 어떤 버튼인지 명확히 적어주는게 좋다.

<br>

하지만 버튼이 서비스에서 많이 사용될텐데?

모든 버튼을 겹치지 않고 .click_button .link_button .round_button 등

네이밍 하는 것에 번거로움이 있다.

<br>

리액트에서 정말 많이 사용하는방법으로 POST CSS를 사용한다!

css파일 앞에 .module 을 붙혀주면 포스트 css를 자동으로 사용할 수 있다.

- Button1.css → Button1.module.css
- Button2.css → Button2.module.css

그럼 CSS파일에서 클래스명이 겹치는거를 신경쓰지 않고 모두 .button이라고 해도 괜찮다.

<br>

추가로 설정해줘야하는 것이 있다!

**.module.css 파일을 import 해올 때 객체 이름을 우리가 원하는대로 지어주면 된다.**

```jsx
import styles from "./Button1.module.css";
import classes from "./Button1.module.css";
```

<br>

**button태그 안에 className 을 지정할떄 자바스크립트를 사용하여 설정해주면 된다.**

```jsx
export default function Button1() {
  return <button className={styles.button}>Button1</button>;
}

export default function Button1() {
  return <button className={classes.button}>Button1</button>;
}
```

이렇게 하면 각 컴포넌트에 지정한 css파일이 설정되어 중첩되지 않고 잘 나타난다.

<br>

실제 코드에서 살펴보면 아래외 같이 클래스명에 컴포넌트 이름과 고유의 아이디를 붙혀주어 자동으로 구분지어준다.

```html
<button class="Button1_button__S9dlB">Button1</button>
<button class="Button2_button__qJceK">Button2</button>
```
