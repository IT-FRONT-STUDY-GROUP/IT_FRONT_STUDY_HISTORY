let scores = [83, 44, 23, 53, 67, 32, 86, 91];
let answer = 0;
for (let i = 0; i < scores.length; i++) {
  answer += scores[i];
}
console.log(answer);

// 혹은

let scores2 = [83, 44, 23, 53, 67, 32, 86, 91];
let answer2 = 0,
  i = 0;
while (i < scores2.length) {
  answer2 += scores2[i++];
}
console.log(answer2);

// 해당 문제는 반복 횟수가 정해져있기 때문에 while문보다는
// for문이 적합하다.