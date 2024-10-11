# 문제 1

### 반복문을 사용하여 아래 list의 모든 항목을 더한 뒤 출력하세요.
### for문과 while, do while 중 무엇이 더 적합할지도 고려해봅니다.

```javascript
let scores = [83, 44, 23, 53, 67, 32, 86, 91];
```


# 문제 2

### 아래 5개의 출력문의 결과를 예측해주세요.
```javascript
let global_a = 10;
function addA(a){
    return a + global_a;
}
console.log(addA(100));

let b = 20;
function addB(b){
    return b + 100;
}
console.log(addB(100));
console.log(b + 100);


let c = 30;
let d = 40;
function addCD(){
    let c = 50;
    return c + d;
}
console.log(addCD());
console.log(c + d);

let e = 50;
{
    let e = 70;
    console.log(e); // 지역 변수 e(70)
}
console.log(e); // 전역 변수 e(50)
```

# 문제 3

### 두 정수와 사칙연산 기호 중 하나를 입력으로 받고
### 입력으로 받은 사칙연산 기호에 따라 두 정수를 연산 한 후
### 해당값을 반환하는 함수를 작성하여 주세요.
