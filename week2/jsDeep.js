//   truthy&falshy

/*
falshy한 값 !==false
true나 false로 변환하지 않아도, 값 자체로 논리적 평가가 가능

// 일반적인 조건문
if (value !== null && value !== undefined && value !== 0) {
  console.log("유효한 값입니다.");
}

// Truthy를 활용한 간단한 조건문
if (value) {
  console.log("유효한 값입니다.");
}


if (!undefined) {
    console.log("undefined는 falshy한 값");
} if (!null) {
    console.log("null은 falshy한 값");
} if (!0) {
    console.log("0 falshy한 값")
} if (!-0) {
    console.log("-0 falshy한 값")
} if (!NaN) {
    console.log("NaN falshy한 값")
} if (!"") {
    console.log("  falshy한 값")
} if (!0n) { // BigInt 자료형
    console.log("0n falshy한 값")
}
*/

// 값이 비었는지 확인

let varA;

if (varA) {
  console.log("값이 있음");
} else { // undefined, null > all "falshy"
//  console.log("값이 없음");
}

// 0, -0, NaN(연산 오류/숫자 아닌 값을 숫자형으로 받음) 등인지 확인

const num = NaN;

if (num) {
  console.log("양수이거나 음수");
} else {
//  console.log("0이거나 -0이거나 NaN");
}

// 문자열이 공백이 아닌지 확인

const str = "";

if (str) {
  console.log("공백 아님");
} else {
//  console.log("공백임");
}

// undefined>사용자가 입력 필드를 빈 채로 제출
// null>프로그램 작성 시 초기화 값으로 사용
// "">사용자가 텍스트 필드를 빈 채로 제출




// 단락 평가

// AND - 첫 번째 피연산자가 falsy면, 첫 번째 피연산자를 반환하고, 이후 평가를 중단 (and short-circuiting)

function calcA() {
    console.log("a");
    return false;
  }
  
  function calcB() { // <- 호출되지 않음
    console.log("b");
    return true;
  }
  
//  console.log(calcA() && calcB());  // a 출력o b 출력x
  
function calcA() {
    console.log("a");
    return undefined;
  }
  
  function calcB() { // <- 호출되지 않음
    console.log("b");
    return true;
  }
  
  console.log(calcA() && calcB());  // undefined
 // trushy/falshy 값은 그대로 반환


 function getName(person) {
    /*  if (person !== undefined && person !== null) { ①
    return person.name;
  } else {
    return "매개변수가 객체가 아닙니다.";
  } */
    return person && person.name;
  }
  
  let person = { name: "chacha" };
  let name1 = getName(undefined);
  
  let name2 = getName(null);
  let name3 = getName(person);
  
  /*
  console.log(name1); // undefined
  console.log(name2); // null
  console.log(name3);  // chacha
  // person falshy > person.name 호출x
  */

// OR - 오퍼랜드1이 trushy>오퍼랜드1 반환>이후 평가 중단 (and short-circuiting)

function calcA() {
    console.log("a");
    return false;
  }
  
  function calcB() { // <- 호출되지 않음
    console.log("b");
    return true;
  }
  
//  console.log(calcA() || calcB());  // a 출력o b 출력x
  

// or 단락평가 + null 병합연산자

const vA = 0;
const vB = "chacha";

const resultA = vA || vB; // trushy&falsy
const resultB = vA ?? vB; // null이나 undefined가 아닌 피연산자
/*
console.log(resultA);   // chacha
console.log(resultB);   // 0
console.log(vA&&vB);    // 0
*/


// 객체 자료형 - 배열, 함수

        // 배열 also 프로퍼티 메서드
        const arr=[1,2,3];
    //    console.log(arr.length); // 프로퍼티
        arr.pop(); arr.push(4); // 메서드
    //    console.log(arr);

        // 함수 also 프로퍼티
        function firstF(){};
    //    console.log(firstF.name); // 프로퍼티

    // 객체 자료형 -> 변수는 객체 주솟값 저장 > 저장된 주소의 객체 참조값 이용
    //            -> 값이 == <> 서로 != 객체

    let user = { name:"cha*2" };
    let thisuser = user;
    user.name="chacha";
    //console.log(thisuser.name); // chacha

    let user2 = { name : "chacha" };

    //console.log(user.name===user2.name); // true
    //console.log(user===user2);           // false
    // 내용 ==여도 객체 != < 값X참조값O비교

    let arr1=[1,2,3];
    let arr2=[1,2,3];
    //console.log(arr1===arr2); // false



// 반복문 응용

    // 배열과 반복문 - 웹 서비스 게시판/피드의 게시물 리스트

    let colors = ["blue","red","green"];
    for (let i=0; i<colors.length; i++){
    //    console.log(colors[i]);
    }

    // for of 문

    for (let item of colors){ 
    //    console.log(item);      
    }


    // 객체와 반복문

    let time={
        date:13,
        hour:17
    };

    let keyArr=Object.keys(time); // 객체의 프로퍼티 "키"만 배열로 리턴

    for (let item of keyArr){
    //    console.log(item, time[item]);
    }

    let varArr=Object.values(time); // 객체의 프로퍼티 "값"만 배열로 리턴

    for (let item of varArr){
    //    console.log(item);
    }

    // 객체는 기본적으로 iterable하지 않음
        // for of 프로퍼티 값 순회 > 배열로 변환 필요 (arr only)
        // for in 프로퍼티 "키" 순회 > 키, 값(=arr[키]로) 동시 순회cO

    for (let item in time){
    //    console.log(item,time[item]);
    }



// 구조 분해 할당

    // 배열 구조 분해 할당
    let [one, two]=arr1;    // 배열 []
    //console.log(one,two); // 배열의 길이!=변수 개수 <> 오류X (undefined 할당)

    // 객체
    let {date,hour} = time; // 객체 {}
    //console.log(date,hour); // value 할당cO

    // 함수의 매개변수인 객체

    function destruct({date:d,hour:h}){ //원프로퍼티명:새속성명
        //console.log(d,h);
    }

    destruct(time);

 

// 스프레드 연산자, rest 매개변수

