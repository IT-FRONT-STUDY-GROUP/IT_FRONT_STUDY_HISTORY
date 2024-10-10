// 아래 코드의 출력값을 적어보시오

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
