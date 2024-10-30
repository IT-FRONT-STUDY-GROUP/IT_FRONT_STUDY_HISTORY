fetch로 content.html을 불러왔을 때 자바스크립트가 동작하지 않는 이슈 발견 및 해결

### 기존 작업 방식 <br>

context.html 하단에 스크립트 작성<br>
index.html에서 fetch를 통해 context.html을 불러오기
<br>

### 문제 원인 <br>

**fetch를 통해 동적으로 HTML을 삽입하면 script 태그 안의 자바스크립트 코드가 DOM에 추가될 뿐 실행되지 않기 때문에 작동하지 않는 것**
<br>

### 해결 방법 <br>

- js 폴더 생성 후 스크립트 파일 생성

- (옵션) 다른 스크립트와의 전역 변수 충돌을 방지하기 위한 스크립트 최상위 즉시실행 함수로 감싸주기 (()=>{ ... })()
  html에 onclick="handleClick()" 과 같은 이벤트 핸들러를 지정한 경우 클릭한 시점에 함수를 호출해야 하기 때문에 즉시 실행 함수를 넣지 않는다.

- index.html의 head 부분에 스크립트 태그 동적으로 추가하기 위한 함수 생성

```javascript
async function importScr(target) {
  const response = await fetch(`./js/${target}.js`);
  if (response.ok) {
    const scriptEl = document.createElement("script");
    scriptEl.defer = true;
    scriptEl.src = `./js/${target}.js`;
    document.head.appendChild(scriptEl);
  }
}
```

- 클릭이 되면 setTimeout 함수를 통해 transition이 끝난 후 스크립트 생성 함수를 실행시킨다.

```javascript
document
  .querySelectorAll(".index-game-item")
  .forEach((element, index, array) => {
    element.addEventListener("click", function () {
      importPage(element.dataset.content);
      const content = element.dataset.content;
      setTimeout(() => {
        const targetElement = document.querySelector(`.${content}`);
        if (targetElement) {
          console.log("요소 찾음:", targetElement);
          importScr(element.dataset.content);
        }
      }, 2000);
    });
  });
```

---

### **웹 페이지에서 html, javascript가 동작하는 과정**

(css 생략)

1. **HTML 파일 로드 및 파싱**

- 파싱 : 브라우저가 html문서를 위에서부터 아래로 읽으면서 DOM(Document Object Model) 트리를 만든다.
  <br>
  <br>

2. **렌더 트리 생성**

- 브라우저는 요소들을 실제 화면에 렌더링(paint) 한다.
  <br>
  <br>

3.  **JavaScript 로드 및 실행**

- html 파싱 도중 브라우저가 script 태그를 발견하면 html 파싱을 중단하고 자바스크립트를 먼저 다운로드 및 실행한다.
  <br>

- 링크된 javaScript 파일이 클수록 html 파싱이 멈춰있는 시간이 길어지면서 페이지 로드가 느려질 수 있다.
  <br>
- 때문에 일반적으로 script 태그는 (페이지의 마지막) body 태그의 하단에 위치하는게 좋다!
  <br>
  <br>

---

<br>
그렇다면 DOM이란 무엇인가?

### **DOM(Document Object Model)**

DOM(Document Object Model)은 HTML 문서를 트리 구조로 나타낸 것으로, JavaScript는 DOM을 통해 웹 페이지의 요소들에 접근하고 수정할 수 있다.
<br>
<br>

---

### html 파싱 후 javascript가 로드되면 동작하지 않는 이유는?

javascript 코드가 document.querySelector과 같은 DOM 조작 메서드를 통해 요소를 찾으려고 할 때, 요소가 존재하지 않거나 로드되지 않은 상태에서는 null을 반환하기 때문에 정상적으로 동작하지 않는다.
<br>
<br>

---

<br>
스크립트 태그를 페이지의 마지막에 넣지 않아도

### DOM이 완전히 준비된 후 javascript가 동작하도록 하는 방법

- head 태그에 위치할 때

1. defer 속성<br>
   html 파싱과 javaScript 다운로드를 병렬적으로 진행, html 파싱이 끝난 후 스크립트가 실행되도록 보장한다.

```html
<head>
  <script src="content.js" defer></script>
</head>
<body>
  <!-- html 내용 -->
</body>
```

<br>

2. DOMContentLoaded 이벤트<br>
   DOMContentLoaded 이벤트 리스너 이후 작성된 코드는 DOM 트리가 완전히 구성된 후 실행된다.

```javaScript
document.addEventListener("DOMContentLoaded", () => {
    const el = document.querySelector(".el");
});
```

<br>
