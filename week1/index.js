//console.log("모든 사람은 태어날 때부터 자유롭고, 존엄하며, 평등하다.");

let age=20;
//console.log(age);
age=30;
//console.log(age);

const a=1;

//원시자료형-값 1개 only
//숫자형

let inf=Infinity;   //범위 초과할 때
let minf=-Infinity; //숫자를 0으로 나눌 경우 반환
let nan=NaN;        //숫자와 문자를 더할 때/숫자 변환 실패/계산 실패 시 반환

//문자형
let myname="차차";
let mygreeting=`: ${myname}입니다 만나서 반갑습니다!`; //템플릿 리터럴
//console.log(myname+mygreeting);

let isSwitch=false;
let emptyV=null;            //값을 할당할 필요 없을 때
let unAllocated=undefined;  //선언 후 값을 할당하지 않았을 때


// undefined>사용자가 입력 필드를 빈 채로 제출
// null>프로그램 작성 시 초기화 값으로 사용
// "">사용자가 텍스트 필드를 빈 채로 제출


//형 변환

let s="10";
let n1=Number(s); //문자 > 숫자
let n2=1;
//console.log(n1+n2);

let strA="10개";
let numA=parseInt(strA); //숫자+문자 > 숫자
//console.log(numA);

let strB="약10개";
let numB=parseInt(strB);    // 문자로 시작하는 숫자+문자
//console.log(numB);          // NaN 반환

let num=2024;
let str=String(num);    //숫자 > 문자
//console.log(str);
//undefined 값은 문자열 undefined, null 값은 문자열 null, true 값은 문자열 true로 변환

let s1="cheese"; let n=1; let v=""; //"" f <> " " t
//console.log(Boolean(s1),Boolean(n),Boolean(v)); // t t f
//truthy&falsy



//연산자

let BoolA=true; let BoolB=false;
//console.log(BoolA&&BoolB,BoolA||BoolB,BoolA===BoolB,BoolA!==BoolB,!BoolA);
//false true false true false
// === 값+자료형 비교

//null 병합 연산자
let varA = 10;
let varB = 20;
let varC;

//console.log(varA ?? varB); // 10 확정 ?? 확정 > 왼쪽 return
//console.log(varC ?? varB); // 20 없음 ?? 확정 > 오른쪽 return

//변수 user에 해당 사용자의 이름이 있다면 이름을, 이름이 없다면 닉네임을 저장하시오
let name; let nickname="chacha";
user = name ?? nickname;
//console.log(user);

//동적 타이핑-typeof
let vA=1;
vA="chacha";

typeof vA==="string" ? console.log("문자 자료형"):console.log("아님");


//조건문

//if문
if (num>10) {
    console.log("10 이상");
} else if (num===10) {
    console.log("10");
} else {
    console.log("10 이하");
}

//switch/case문
let fruit=1;

switch (fruit) {
    case 1:
        console.log("한");
    case 2:
        console.log("두개");
        break;
    default:
        console.log("모르겟음");
}

for (let i=0;i<100;i++){
    if (i%2==1) 
        continue;
//    console.log(i);
}


// 함수


//console.log(greet("안녕! ")); // 함수 호이스팅

function greet (greetingMent){
    let greeting=greetingMent+"Hi"
    return greeting;
}



// 함수 표현식

//greeting2(); //함수 표현식>호이스팅CX

let greeting2=function () { console.log(" Hi") };
// greeting2();



// 콜백 함수


function parentF(callBack){ // 함수를 매개변수로 전달
    console.log("parent");
    callBack(); // 인수로 받은 콜백 함수 호출
}

function childF(){ // 콜백 함수
    console.log("child");
}

// parentF(childF);

function repeat(n){            
    for (let i=1; i<=n; i++){   //1부터 n까지 반복하면서
        console.log(i);         //프린트
    }
}

//repeat(5);

function repeatDouble(n){
    for (let i=1; i<=n; i++){   //1부터 n까지 반복하면서
        console.log(i*2);       //*2해서 프린트
    }
}

//repeatDouble(5);



// 콜백 함수 이용하면

function double (n){ //*2 프린트
    console.log(n*2);
}

function origin (n){ //프린트
    console.log(n);
}

function repeatPrint (n, callback){ //1~전달받은 숫자까지 callBack 실행
    for (let i=1; i<=n; i++){
        callback(i);
    }
}

//repeatPrint(5, origin);
//repeatPrint(5, double);

/*  (정적)C언어와 비교 : 
    포인터 사용 없이도 (동적)콜백 함수를 객체로 간편하게 사용 가능
void repeatPrint(int n, void (*callback)(int)) {
    for (int i = 1; i <= n; i++) {
        callback(i); // 콜백 함수 호출
    }
}
*/



// 함수 표현식을 이용한 콜백 함수

const d = function (n) {
    console.log(n*2);
};

//repeatPrint(5, d);

// 인수에 함수 표현식 바로 할당

//repeatPrint(4, function(n){ console.log(n*3); });


// 화살표 함수

let funcA=function (s){
    return s+", hello";
}

let funcB=(s)=>s+", hello";

//console.log(funcB("chacha"));


// 콜백 함수를 화살표 함수로 작성
let isConfirm=true;

function confirm (onYes, onNo){
    if (isConfirm) onYes();
    else onNo();
}

confirm (
    ()=>console.log("승인"),
    ()=>console.log("거부")  
);


// 블록 스코프 vs 함수 스코프

if (true){
    var A=1; // var->함수 스코프 > 블록 안에서 선언<->외부에서 접근
}            // var(X) let, const(o)   

    console.log(A);



// 객체

let person = { // 객체 생성 1
    nickname : "chacha", // key : value
    age : 22 // key<String only
}

let Obj=new Object(); // 객체 생성 2 - 빈 객체

person.recentfood="딸기누텔라와플";
person["recentmovie"]="하얼빈";

function addProperty(obj,pro,value){ // 유동적 프로퍼티 추가 함수
    obj[pro]=value;
}

let obj = new Object();

addProperty(obj, "a", 1);
addProperty(obj, "b", 1);
addProperty(obj, "c", 1);

obj.b=2;        // 프로퍼티 수정
delete obj.c;   // 프로퍼티 삭제
//console.log(obj);

const obj2=new Object(); // const 객체도
obj2.a=1;
obj2.a=2;                // 프로퍼티 수정co
//console.log(obj2);

//존재하는 않는 프로퍼티 > undefined 리턴

let isNameExist = "a" in obj; // 객체 존재 확인-in 연산자
//console.log(isNameExist);

let obj3={
    a : 1,
    print : function (){
        console.log("good");
    }
};

//obj3.print();




// 배열

let arr1=[]; // 배열 선언 1
let arr2=new Array(); // 배열 선언 2

arr1=[ // 배열 값
    1,
    "a",
    true,
    null,
    funcA,
    obj
];

console.log(arr1[3]);