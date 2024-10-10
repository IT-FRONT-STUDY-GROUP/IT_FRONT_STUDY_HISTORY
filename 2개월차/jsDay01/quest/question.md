# 문제 1

### 아래 코드의 출력값을 적어보시오

```javascript
let a = 10,
  b = 20,
  c = 30,
  d = 40,
  whatIsThis;

switch (c) {
  case a + b:
    whatIsThis = a + b;
    break;
  case b + c:
    whatIsThis = b + c;
    break;
  case c:
    whatIsThis = c - 1;
    break;
  case d:
    whatIsThis = d;
    break;
  default:
    whatIsThis = 0;
    break;
}

console.log(whatIsThis);
```

# 문제 2

### 다음은 a, b, c 중 가장 큰 값을 answer에 담는 코드입니다.

### 아래 코드에서 에러가 발생한 원인을 작성하여 주세요.

```javascript
let a = 10,
  b = 20,
  c = 30;
const answer = 40;

if (a >= b) {
  answer = a;
} else {
  answer = b;
}
if (c > answer) {
  answer = c;
}

console.log(answer);
```
