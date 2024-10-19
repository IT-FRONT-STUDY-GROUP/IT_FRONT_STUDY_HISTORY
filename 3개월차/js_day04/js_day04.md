# 함수 종류
1. 일반함수 : function 키워드로 선언한 기본 문법
```javascript
function fn1(매개변수){
    ...실행문
}
```

2. 화살표함수 : (매개변수) => {실행문} 형태로 간략하게 표현한 선언식
```javascript
() => {
    ...실행문
}

a => { // 매개변수가 하나일 때는 소괄호 생략 가능

}

(a, b) => { // 매개변수가 0개이거나 2개 이상일 때는 생략 불가

}
```

3. 기명함수 : 이름이 있는 함수로 function 뒤에 시그니처를 작성한 선억식 함수에 해당(화살표 함수는 불가능)
```javascript
function fn(){

}
```

4. 익명함수 : 이름이 없는 함수로 function 키워드만 쓰거나 화살표 함수인 경우 해당
```javascript
function(){}
() => {}
// 이름이 없으므로 변수에 담아서 사용하거나 즉시실행, 콜백 함수에 전달하여 사용

let fn1 = function(){}
let fn2 = ()=>{}


// 콜백 함수 예시
function callBack(fn){
    fn();
}
callBack(() => {console.log('callBack')});
```

5. 즉시실행함수 : 함수를 선언함과 동시에 실행 
```javascript
(function(){})() // 선언한 함수를 소괄호로 감싼 뒤 실행하기 위해 ()를 붙여준다.
(() => {})()

(function fn1(){})())// 익명함수 뿐만 아니라 모든 함수에 적용 가능
```

6. 재귀함수 : 자신을 참조하는 함수
```javascript
function loop(num){
    if(num <=1 ) return 1;

    return num + loop(num -1);
}

loop(10) // 55
```

&nbsp;

&nbsp;

# 금일 문제
해당 자판기는 동전 넣고 음료수 명 선택 가능  
메뉴  
솔의 눈 : 300원  
비타500 : 500원  
콜라 : 1000원  
만약 없는 메뉴를 선택하면 "존재하지 않는 메뉴입니다." 출력  
넣은 동전 보다 가격이 더 높다면 "요금이 부족합니다. 잔돈 1000원" 출력  
넣은 동전 보다 가격이 싸다면 "콜라, 잔돈 500원" 출력  
만약 값이 같다면 "콜라" 출력  
ex) 자판기함수(1000, "콜라");

### if문 활용
```javascript
let menu = {
   "솔의 눈": 300,
   비타500: 500,
   콜라: 1000,
};

function vendingMachine(money, order) {
   let price = menu[order];

   if (price) return console.log(`존재하지 않는 메뉴입니다.`);

   let orderResult = '';
   if (menu[order] > money) orderResult = `요금이 부족합니다. 반환 ${money}원`;
   else if (menu[order] < money) orderResult = `${order}, 잔돈 ${money - menu[order]}원`;
   else orderResult = order;

   console.log(orderResult);
}

vendingMachine(1000, "콜라");
vendingMachine(100, "콜라");
vendingMachine(1500, "콜라");
```
&nbsp;

### 삼항 연산자 활용
```javascript
let menu = {
  "솔의 눈": 300,
  비타500: 500,
  콜라: 1000,
};

function vendingMachine(money, order) {
  let price = menu[order];
  let orderResult = '';
  orderResult = !price ? `존재하지 않는 메뉴입니다.` :
                price > money ? `요금이 부족합니다. 반환 ${money}원` : 
                price < money ? `${order}, 잔돈 ${money - price}원` : order

  console.log(orderResult);
}

vendingMachine(1000, "");
vendingMachine(1000, "콜라");
vendingMachine(100, "콜라");
vendingMachine(1500, "콜라");
```