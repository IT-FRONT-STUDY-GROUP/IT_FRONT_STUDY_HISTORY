# js에서의 this

### 나만의 구분법
* 메소드든 함수든 function 키워드는 실행 시점에 암묵적 바인딩, 명시적 바인딩이 없으면 전역 객체에 바인딩 된다.
* arrow function은 선언 시점의 스코프 this가 바인딩 된다.

&nbsp;

---
## 원인 유추
* js는 인터프리터 언어로 함수는 해당 문을 실행할 때 바인딩할 객체를 찾을테고 없다면 알아서 전역 객체로 유추할 것이다.
* arrow function은 왜 다를까?
	* 이건 내 생각이지만 arrow function은 초기 문법이 아니므로 js가 코드를 컴파일하는 시점에 일반 function으로 변환되며 동시에 실행문의 this가 선언 시점의 this로 명시적 결정이 되는 것이 아닐까 유추를 해보긴 해봤다.(확인 불가)
	* js는 인터프리터 언어인데 컴파일 시점이 있는가? 여러 언어들이 인터프리터와 컴파일의 장점을 함께 가져가는 추세라고 한다.