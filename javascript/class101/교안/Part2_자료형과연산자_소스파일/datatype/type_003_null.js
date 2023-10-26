// 자바스크립트 자료형에서 false로 반환되는 값
// 이번 강좌에서는 자바스크립트에서 false로 리턴되는 값들에 대해서 주의할 사항을 실습해봅니다.


// [1] : null --> 꼭 기억하자!
// 값이 없다. 라는 의도적이면서 명시적인 표현.
// null은 타입체크를 하면 object(객체)로 나온다. (값 출력이 아니라 타입을 체크하는 경우)
// 논리 연산으로는 false 값을 가진다. --> undefined도 마찬가지.
let isNullCheck = null;

console.log( isNullCheck );  			// null
console.log( typeof(isNullCheck) );  	// object


// [2] : 값이 없다라는 의미의 빈 값 체크 --> 반대로 하면 값이 있는 경우
let value;  // '', null, undefined --> false

// [2-1]
// if( value == "" ) {
	// alert( '값이 없음' );
// }
// else {
	// alert( '값이 있음' );
// }

// [2-2] : NOT 연산자 사용
// alert( !value );  // true
// if( !value ) {
	// alert( '값이 없음' );
// }
// else {
	// alert( '값이 있음' );
// }


// [3] : '', null, undefined 값 체크
// let isData = 20;

// if( isData ) {
	// alert( '참 - 값이 있음' );
// }

// if( !isData ) {
	// alert( '거짓 - 값이 없음' );
// }


// [4] : null도 아니고 undefined도 아니고
// let isTest = 111;

// if( isTest != null && isTest != undefined ) {
	// alert( isTest );
// }


// [5] : 자바스크립트 자료형에서 false로 반환되는 값 --> "", null, undefined, 0, NaN
// alert( "안녕" / 2 );  // NaN
// function add( a, b ) {
	// return a + b;
// }
// alert( add(1, 2) );  	// 3
// alert( add() );  		// NaN

let someValue = 0;
// alert( someValue );

// if( someValue == '' || someValue == null || someValue == undefined ) {
if( !someValue ) {
	alert( '값이 없음' );
}
else {
	alert( '값이 있음 --> ' + someValue );
}

































