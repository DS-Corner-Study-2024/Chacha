console.log("모든 사람은 태어날 때부터 자유롭고, 존엄하며, 평등하다.");

let age=20;
console.log(age);
age=30;
console.log(age);

const a=1;

//원시자료형-값 1개 only
//숫자형

let inf=Infinity;   //범위 초과할 때
let minf=-Infinity; //숫자를 0으로 나눌 경우 반환
let nan=NaN;        //숫자와 문자를 더할 때/숫자 변환 실패/계산 실패 시 반환

//문자형
let myname="차차";
let mygreeting=`: ${myname}입니다 만나서 반갑습니다!`; //템플릿 리터럴
console.log(myname+mygreeting);

let isSwitch=false;
let emptyV=null;            //값을 할당할 필요 없을 때
let unAllocated=undefined;  //선언 후 값을 할당하지 않았을 때

//형 변환