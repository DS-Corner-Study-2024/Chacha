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
        const arr0=[1,2,3];
    //    console.log(arr0.length); // 프로퍼티
        arr0.pop(); arr0.push(4); // 메서드
    //    console.log(arr0);

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

    let arr=[1,2,3];
    let arr2=[1,2,3];
    //console.log(arr===arr2); // false



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
    let [one, two]=arr;    // 배열 []
    //console.log(one,two); // 배열의 길이!=변수 개수 <> 오류X (undefined 할당)

    // 객체
    let {date,hour} = time; // 객체 {}
    //console.log(date,hour); // value 할당cO

    // 함수의 매개변수인 객체

    function destruct({date:d,hour:h}){ //원프로퍼티명:새속성명
        //console.log(d,h);
    }

//    destruct(time);

 

// 스프레드 연산자, rest 매개변수

// 스프레드 연산자

let arrA = [1, 2, 3];
let arrB = [...arrA, 4,5,6];
//console.log(arrB); // [1, 2, 3, 4, 5, 6]

let objA = {
    a: 1,
    b: 2
  };
  
let objB = {
    ...objA,
    c:3,
    d:4
};  
  
//console.log(objB); // {a: 1, b: 2, c: 3, d: 4}

function func(a, b, c) {
    console.log(a, b, c);
  }
  
  let arra = [1, 2, 3];
//func(...arra); // 1 2 3



// rest 매개변수 - 묶어줌

function func(...rest){
    console.log(rest);
}

//func(0,1,2,3,4);

function func(param1,param2,...rest){ //rest 매개변수는 다른 매개변수들 뒤 마지막에
    console.log(param1,param2,rest);
}

//func(0,1,2,3,4);



// 배열 메서드

//push - 배열 마지막에 요소를 추가, 배열의 새로운 길이를 반환
let alphabet=["a",'b','c'];
let newLength=alphabet.push("d");

//console.log(alphabet); // ["a", "b", "c", "d"]
//console.log(`새로운 배열의 길이: ${newLength}`); // 새로운 배열의 길이: 4

//pop - 마지막 요소 제거, 반환
let removedItem=alphabet.pop();
//console.log(removedItem); // d 배열이 비었는데 pop>undefined 반환

removedItem=alphabet.shift(); // 첫번째 요소 제거,반환
//console.log(removedItem); // a

newLength=alphabet.unshift("a"); // 첫번째에 삽입, 새 배열 길이 반환

//console.log(alphabet); // ["a", "b", "c", "d"]
//console.log(`새로운 배열의 길이: ${newLength}`); // 새로운 배열의 길이: 3

// 속도 pop, push > shift, unshift

let newAlpha = alphabet.slice(0,2); // (부터:직전까지) 자른 새 배열 반환
//console.log(alphabet, newAlpha); // ['a',b','c'] ['a',b']
//console.log(alphabet.slice(1)); // ['a',b','c'] ['b'.'c']
//console.log(alphabet.slice(-2)); // ['b','c']

let addAlpha=['d','e'];
//console.log(alphabet.concat(addAlpha)); // 배열 결합

addAlpha={ a:1, b:2 }; // 객체는 1개 요소 취급
//console.log(alphabet.concat(addAlpha));

function print (item, idx) {
    console.log(`${idx}번째 요소: ${item}`);
  }
/*  
alphabet.forEach(print); // 요소 순회+인수로 받은 콜백함수 실행

alphabet.forEach(
    (item, index) => console.log(`${index}째 요소:${item}`));

*/

//console.log(alphabet.indexOf('b',1)); // 요소 찾아 인덱스 반환
//                            요소,찾기시작할 
// 배열길이오류/인덱스 없음/===로엄격비교f> -1 반환

let arr3 = [{ name: "chacha" }, 1, 2, 3];       // ===로 비교>객체탐색X
//console.log(arr3.indexOf({ name: "chacha" }));  // -1
//console.log(arr3.includes(1)); // 존재여부 탐색 t/f 리턴


arr3 = [1, 2, 3];

function determine(item, idx, arr) { // arr3 요소 순차적으로 실행
    if (item%2===0)
        return true;
    else
        return false;
  }
  
  let index = arr3.findIndex(determine); // 함수 실행 후 true를 받은 첫번째 요소 반환
  
//  console.log(index); // 1

//화살표 함수와 삼항 연산자를 이용
index=arr3.findIndex((item,idx,arr)=> 
    (item%2!==0) ? true : false
);

//console.log(index); // 0

arr3.push({name:"chacha"});


let indexC = arr3.findIndex((item) => item.name === "chacha");
console.log(indexC); // 3 인덱스리턴

let nameC=arr3.find((item)=>item.name==="chacha") // 인덱스x요소o 리턴
//console.log(nameC); // {name:"chacha"}
// 특정 조건 만족하는 요소 찾기Co

let arr4 = [
    { name: "이종원", hobby: "축구" },
    { name: "이정환", hobby: "영화" },
    { name: "신다민", hobby: "축구" },
    { name: "김효빈", hobby: "노래" }
  ];
  
  let filteredArr = arr4.filter((item)=>(item.hobby==="축구"));
  // 콜백 함수를 인수로 받아 만족하는 요소만 새 배열로 리턴
  
//  console.log(filteredArr);
  
  // [ { name: '이종원', hobby: '축구' }, { name: '신다민', hobby: '축구' } ]


let arr5=[1,2,3];
//console.log(arr5.map((i)=>i*3)); // [3,6,9]

arr5 = [
    { name: "이종원", hobby: "축구" },
    { name: "이정환", hobby: "영화" },
    { name: "신다민", hobby: "축구" },
    { name: "김효빈", hobby: "노래" }
  ];
  
  let newArr = arr.map((item) => item.name);
  //각 요소에 콜백 함수 실행 > 리턴값을 새 배열로
  
//  console.log(newArr); // [ '이종원', '이정환', '신다민', '김효빈' ]

function compare(a, b) {
    if (a > b) {
        return 1;
    } else if (a < b) {
        return -1;
    } else {
        return 0;
    }
  }
  
  arr3 = [10, 5, 3];
  arr3.sort(compare); // 비교 함수에서 -1 리턴>ba정렬 1>ab 0>그대로
  
//  console.log(arr3); // [3, 5, 10]

// console.log(arr.join(", ")); // 1,2,4 세퍼레이터로 연결한 문자열 리턴

arr = [1, 2, 3];     // 누적값 현재요소 현재인덱스 배열 4개파라미터
let result = arr.reduce((acc, item)=>acc+=item, 1); // 누산해서 1개값 리턴
                        //1 콜백함수          2 초깃값

//console.log(result); // 16






        // Date 객체

// 일반 객체 - 주로 { key : value; method : function...; }
let date1=new Date();
//console.log(date1);


// 타임스탬프
let Jan02_1970 = new Date(24 * 3600 * 1000);
//console.log(Jan02_1970.getTime()); // 86400000


// 날짜 지정 생성
date1=new Date("2024-01-01/00:00:00"); // 공백 . / -로 문자열 전달달
//console.log(date1);


// DB에서-타임스탬프로 생성 가능
date1=new Date(Jan02_1970.getTime());
//console.log(date1); // 1970-01-02T00:00:00.000Z


// Date 객체 요소 얻기, 수정, 출력
console.log(date1.getFullYear(), date1.getMonth());
//                                     0~11                       
console.log(date1.getDay(), date1.getHours());
//                   0~6             UTC+9          
// 수정 메서드 : set...
console.log(date1.toString(), 'd', date1.toDateString());
// Fri Jan 02 1970 09:00:00 GMT+0900 (대한민국 표준시) / Fri Jan 02 1970
console.log(date1.toLocaleDateString());
// 1970. 1. 2.


// n달 이동시키는 함수

function moveMonth (date, moveMonth){
    const curTimestamp=date.getTime();
    const curMonth=date.getMonth();
    let resDate=new Date(curTimestamp);
    resDate.setMonth(curMonth+moveMonth);
    return resDate;
}

// 배열에서 이번 달 날짜만 필터링

function filterThisMonth(dateArray, pivotDate){
  const year = pivotDate.getFullYear();
  const month = pivotDate.getMonth();

  const startDay = new Date(year, month, 1, 0, 0, 0, 0);
  const endDay = new Date(year, month + 1, 0, 23, 59, 59);

  
  let resArr=dateArray.filter((it)=>
    it.getTime()>=startDay.getTime()&&
    it.getTime()<=endDay.getTime()
    );
  return resArr;
}


    // 비동기 처리


setTimeout(()=>
  console.log("1번!"), 3000);

console.log("2번!");

// 2번!
// 1번!


function orderCoffee(str,time){
  setTimeout(() => {
    console.log(`${str} 제조 완료`)
  }, time);
}

orderCoffee("달콤한 커피", 4000);
orderCoffee("레몬 티", 2000);
orderCoffee("시원한 커피", 3000);

// 레몬 티 제조 완료 
// 시원한 커피 제조 완료 
// 달콤한 커피 제조 완료

// 주의 : setTimeout은 리턴값X 타이머식별번호O 반환함

function double(num, cb) { // 전달받은 콜백 함수를
  setTimeout(() => {
    const doubleNum = num * 2;
    cb(doubleNum); // setTimeout 함수 리턴값(비동기작업 결과값) 실행
  }, 1000);
}

const res = double(10,(res)=>console.log(res)); // 콜백 함수 전달
console.log("마지막");

// 마지막
// 20


// 프로미스 객체

const promise = new Promise( // 생성자에 비동기 '실행 함수'를 인수로 전달
  function(resolve, reiect){ // 실행함수의 매개변수
    setTimeout(() => {
      resolve("성공"); // 상태를 fulfilled로 변경
    }, 500);
});

promise.then((res)=>console.log(res)); // resolve 호출되면 then으로 비동기작업 결과값 이용

const promise2 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    reject("실패");
  }, 500);
});

promise2.catch((err)=>console.log(err));// reject 호출되면 catch 실행

const promise3 = new Promise((resolve, reject) => {
  resolve("성공!"); 
  reject("실패!"); // reject&resolve 둘 다 호출하면 나중 것 무시됨
});
