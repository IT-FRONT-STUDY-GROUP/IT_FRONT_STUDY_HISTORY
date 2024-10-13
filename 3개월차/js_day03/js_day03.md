# 함수 및 반복문
* 함수 : 일련의 동작 및 연산을 하는 코드의 묶음
    * function(매개변수){  
        &nbsp;&nbsp;&nbsp;&nbsp; ...실행문  
    }
* 반복문의 종류 : for, while, do while
    * for : 반복의 횟수를 알고 있을때
    * while : 특정 조건이 충족할때 까지 반복을 하는 경우, 반복의 횟수가 유동적일 수 있음
    * do while : 조건과 무관하게 1회 무조건 실행되어야 하는 경우
---
## 문제
추가 변수나 함수는 얼마든지 추가해도 괜찮습니다.  
drive 함수는 이동거리를 km 단위로 정수로 전달  
drive는 실행 시 해당 km가 1km 씩 줄어들어 0이 되면 "주행완료" 문구 출력  
ex)  
10km  
9km  
...  
1km  
주행완료

단, drieve를 하기 위해서는 엔진이 켜져있어야하며 엔진이 꺼지면 주행할 수 없습니다.  
이때, 엔진은 engine이라는 함수로 on, off 할 수 있으며  
engine은 on일 때 -> off, off일 때는 on이 됩니다.  
그리고 반드시 주행이 끝나면 engine은 off가 됩니다.  

---
```javascript
let egineCheck = false;
function engine() {
  egineCheck = !egineCheck;
}
function drive(km) {
  if (!egineCheck) return console.log("egine이 꺼져있습니다.");
  while (km !== 0) console.log(`${km--}km`);
  console.log("주행완료");
  engine();
}
engine();
drive(10);
```