let global_a = 10;
function addA(a){
    return a + global_a;
}
console.log(addA(100)); // 지역변수 a(100)와 전역변수 global_a(10)이 더해져서 110

let b = 20;
function addB(b){
    return b + 100;
}
console.log(addB(100)); // 지역변수 b(100)와 100이 더해져서 200
console.log(b + 100); // 전역변수 b(20)와 100이 더해져서 120


let c = 30;
let d = 40;
function addCD(){
    let c = 50;
    return c + d;
}
console.log(addCD()); // 지역변수 c(50)와 전역변수 d(40)가 더해져서 90
console.log(c + d); // 전역변수 c(30)와 전역변수 d(40)가 더해져서 70