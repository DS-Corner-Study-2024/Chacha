import React from 'react'; // 라이브러리의 React객체 불러오기 
const MyContext = React.createContext(defaultValue); // createContext 메서드를 호출해 새로운 Context 만들기
 
import React from "react";

const MyContext = React.createContext(defaultValue);

function App() {
  const data = "data";
  return (
    <div>
      <Header />
      <MyContext.provider value={data}>
        <Body />
      </MyContext.provider>
    </div>
  );
}
export default App;
 

import React, { useContext } from "react"; // useContext를 react 라이브러리에서 불러오기

const MyContext = React.createContext(defaultValue);

function App() {
  const data = "data";
  return (
    <div>
      <Header />
      <MyContext.provider value={data}>
        <Body />
      </MyContext.provider>
    </div>
  );
}

function Main() {
    const data = useContext(MyContext); // useContext를 호출하고 Context를 전달, useContext는 해당 Context가 공급하는 값을 반환
    (...)
}

export default App;




// App.js

import React, { useReducer, useRef, useCallback } from "react";
(...) 
const TodoContext = React.createContext(); // TodoContext 만들기 

function App() {
	(...) 
} 

export default App;

// App.js

import React, { useReducer, useRef, useCallback } from "react";
(...) 
const TodoContext = React.createContext(); 

function App() {
	(...) 
      return (
    <div className="App">
      <Header />
      <TodoContext.Provider value={{ todo, onCreate, onUpdate, onDelete }}> // Props(value)를 객체로 설정
        <TodoEditor /> // 기존의 Props 제거 
        <TodoList /> // 기존의 Props 제거 
      </TodoContext.Provider>
    </div>
  );
} 

export default App;


// TodoList.js

const TodoList = ({ todo, onUpdate, onDelete }) => { 
    (...)
    }
    
    TodoList.defaultProps = {
        todo: [], 
    }; 
    
    export default TodoList;
     
    
     

    // App.js
    
    (...)
    export const TodoContext = React.createContext();
    (...)



// TodoList.js

import { useContext, useState, useMemo } from "react"; // useContext 불러오기 
import { TodoContext } from "../App"; // TodoContext 불러오기 
(...) 
const TodoList = ({ todo, onUpdate, onDelete }) => {
    const storeData = useContext(TodoContext); // useContext를 호출하고 TodoContext를 인수로 전달해 storeData에 저장하기  
    console.log(storeData); // storeData를 콘솔에 출력
    (...) 
}; 
(...)
 

 


// TodoList.js

const TodoList = () => {
    const { todo, onUpdate, onDelete } = useContext(TodoContext); 
    (...) 
}; 

export default TodoList;

