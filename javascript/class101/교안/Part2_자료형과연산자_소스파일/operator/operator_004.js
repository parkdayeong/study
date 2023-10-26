// [★] : 문자열 --> 정수, 실수로 바꾸기


// [1] : 문자열 --> 정수로 바꾸기
// let someValue = "10";

// alert( "변수의 타입은? = " + typeof someValue );  // string
// alert( "변수는 정수인가요? = " + Number.isInteger(someValue) );  // false
// alert( "변수를 정수로 바꾸면? = " + Number.parseInt(someValue) );  // 숫자 10
// alert( "이제는 정수인가요? = " + Number.isInteger(someValue) );  // false
// alert( "다시 물어요~ 이제는 정수인가요? = " + Number.isInteger( Number.parseInt(someValue) ) );  // true


// [2] : 문자열 --> 실수로 바꾸기
// parseFloat() --> 정수가 아닌 실수로 변환 --> 소수점을 버리지 않고 그대로 사용.
// let someValue2 = "3.14";

// alert( "3.14를 정수로 바꾸면? = " + Number.parseInt(someValue2) );  // 3
// alert( "3.14를 실수로 바꾸면? = " + Number.parseFloat(someValue2) );  // 3.14 --> 소수점 유지
// alert( Number.isInteger( Number.parseFloat(3.00) ) );  // true


// [3] : 공백이 있으면 --> 맨 앞에 숫자만 정수로 변환 --> parseInt, parseFloat 모두 마찬가지
// let a = "100 200 300";
// let a1 = Number.parseInt( a );  // 100만 정수화

// alert( `변수 a1의 출력값은 = ${ a1 } 이고, 타입은 = ${ typeof(a1) }` );  


// [4] : 공백 아닌 문자가 있어도 --> 맨 앞에 숫자만 실수로 변환.
let b = "3.14만명";
let b1 = Number.parseFloat( b );

alert( `변수 b1의 출력값은 = ${ b1 } 이고, 타입은 = ${ typeof(b1) }` );  // 3.14, number








































