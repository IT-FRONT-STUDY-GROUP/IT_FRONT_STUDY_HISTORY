// 다음은 a, b, c 중 가장 큰 값을 answer에 담는 코드입니다.
// 아래 코드에서 에러가 발생한 원인을 작성하여 주세요.

let a = 10,
  b = 20,
  c = 30;
const answer = 40; // const 는 변할 수 없는 상수값을 담는 선언구이므로

if (a >= b) {
  answer = a; // 값을 재할당 하려는 경우 에러가 발생한다.
} else {
  answer = b;
}
if (c > answer) {
  answer = c;
}

console.log(answer);
