import { useState } from "react";

function TestComp() {
    const [count, setCount] = useState(0);
    
    const onIncrease = () => {
    	setCount(count + 1);
    };
    const onDecrease = () => {
    	setCount(count - 1);
    };
    return (
        <div>
            <h4>테스트 컴포넌트</h4>
            <div>
                <bold>{count}</bold>
            </div>
            <div>
                <button onClick={onIncrease}>+</button>
                <button onClick={onDecrease}>-</button>
            </div>
        </div>
    );
}
export default TestComp;

import TestComp from './component/TestComp'; // TestComp import


return(
    <div className='App'>
      <TestComp /> //자식으로 설정
 		(...)
    </div>
  );
}

export default App;

function TestComp() {
    return (
        <div>
            <h4>테스트 컴포넌트</h4>
            <div>
                <bold>0</bold>
            </div>
            <div>
                <button>+</button>
                <button>-</button>
            </div>
        </div>
    );
}

export default TestComp;

import { useReducer } from "react"; // react 라이브러에서 import

function reducer() {} //새로운 함수 reducer를 컴포넌트 밖으로 만듬

function TestComp() {
    const [count, dispatch] = useReducer(reducer, 0); //useReducer 함수 호출
    
    return (
       (...)
    );
}

export default TestComp;

import { useReducer } from "react";

function reducer() {}

function TestComp() {
    const [count, dispatch] = useReducer(reducer, 0);

    return (
        <div>
            <h4>테스트 컴포넌트</h4>
            <div>
                <bold>{count}</bold> //count 렌더링
            </div>
            <div>
                <button> + </button>
                <button> - </button>
            </div>
        </div>
    );
}

export default TestComp;


import { useReducer } from "react";

function reducer() {}

function TestComp() {
    const [count, dispatch] = useReducer(reducer, 0);

    return (
        <div>
            <h4>테스트 컴포넌트</h4>
            <div>
                <bold>{count}</bold> //count 렌더링
            </div>
            <div>
                <button onClick={() => dispatch({type: "INCREASE", data: 1})}> 
				//+버튼을 누르면 함수 dispatch를 호출하고 인수로 객체를 전달한다.
                +
                </button>
                <button onClick={() => dispatch({type: "DECREASE", data: 1})}>
				//-버튼을 누르면 함수 dispatch를 호출하고 인수로 객체를 전달한다.
                -
                </button>
            </div>
        </div>
    );
}

export default TestComp;


function reducer(state, action) {//state : 현재 State 값이 저장, action : dispatch의 action객체 전달
    switch(action.type){
        case "INCREASE":
            return state + action.data;//기존 State에 action객체의 data 값을 더해 반환
        case "DECREASE":
            return state - action.data;//기존 State에 action객체의 data 값을 빼서 반환
        default:
            return state;
    }
}

function TestComp() {
    (...)
}

export default TestComp;


import {useRef, useReducer} from "react";
  (...)
function reducer(state, action) {
	//상태 변화 코드
  return state;
}

function App() {

  (...)
  const[todo, dispatch] = useReducer(reducer, mockTodo); //useState->useReducer로 변경

   return(
   (...)
  );
}
export default App;

const onCreate = (content) => { //setTodo 함수 전면 삭제
    idRef.current += 1;
  };

  const onUpdate = (targetId) => {
  };

  const onDelete = (targetId) => {
  };

  const onCreate = (content) => {
    dispatch({ //할 일 아이템 생성
      type: "CREATE",  //추가
      newItem: { //추가할 할 일 데이터 설정
        id: idRef.current,
        content,
        isDone: false,
        createdDate: new Date().getTime(),
      },
    });
    idRef.current += 1;
  };
 

  function reducer(state, action) {
    switch(action.type){ //type별로 상태 변화 코드 할당
      case "CREATE": //추가 시 동작
        return [action.newItem, ...state]; //기존 아이템에 action 객체의 새 아이템 추가된 새 배열 반환
  
      default:
        return state;
    }
  }

  
  const onUpdate = (targetId) => {
    dispatch({ 
      type: "UPDATE", //type 프로퍼티:update로 설정
      targetId, //targetId 프로퍼티:수정할 아이템의 id 설정
    });
   };
  }

  (...)
function reducer(state, action) {
  switch(action.type){
    case "CREATE":
      return [action.newItem, ...state];
    case "UPDATE" : {
      return state.map((it) =>  //map 메서드로 순회+매개변수 state에 저장된 아이템 배열에서
      it.id === action.targetId //각 id 값 비교 후 일치하면
      ?{                      
        ...it,                 
        isDone: !it.isDone,	   // isDone을 토글한 새 배열 반환
      }
      : it
      );
    }
    default:
      return state;
  }
}

(...)
function App(){
 (...)
  const onDelete = (targetId) => {
     dispatch({ 
      type: "DELETE",
      targetId, //targetId 프로퍼티->삭제할 아이템 id 설정
     });
   };
  (...)
}

function reducer(state, action) {
    switch(action.type){
      (...)
  
      case "DELETE": { //type 프로퍼티가 DELETE일 때
        return state.filter((it) => it.id !== action.targetId); //filter 메서드->id, targetId가 일치하는 것 제외 할 일 배열 반환
      }
      
      default:
        return state;
    }
  }