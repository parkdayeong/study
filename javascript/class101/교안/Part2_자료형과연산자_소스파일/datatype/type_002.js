// 다양한 자료형(Data Type) 실습
// 이번 강좌에서는 각각의 데이터타입에 대해서 실습을 해봅니다.


// [1] : typeof 연산자
// 피연산자(typeof  연산자 뒤에 오는거 --> 변수의 값 또는 그냥 값이나 변수)가 어떤 자료형(Data Type)인지 반환.
// 보통은 셋팅(할당)된 값을 통해서 어느정도 해당 변수의 데이터타입을 유추할 수 있다.
let name = '홍길동';
window.alert( typeof name );  // string

let age = 20;
alert( typeof age );  // number

let isThisReal = false;
window.alert( typeof isThisReal );  // boolean

let isNullCheck = null;
alert( typeof isNullCheck );  // null --> Object(객체)

let a = undefined;  // 사실 undefined는 변수를 선언만 해줘도 자동적으로 할당되는 값이다. 그리고 동시에 데이터타입이기도 하다.
let b;
alert( "변수 a의 타입은 = " + a + " / 변수 b의 타입은 = " + b );  // undefined


// [2] : typeof()
let eng_score = 90;
console.log( "당신의 영어 점수는 = " + eng_score + "점 입니다. 그리고 데이터타입은 = " + typeof(eng_score) );






















