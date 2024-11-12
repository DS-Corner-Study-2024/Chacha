//eventHandling

function Body() {
    function handleOnClick() { ①
      alert("버튼을 클릭하셨군요!");
    }
  
    return (
      <div className="body">
        <button onClick={handleOnClick}>클릭하세요</button> ②
      </div>
    );
  }
  export default Body;

// HTML, 자바스크립트를 사용할 때의 이벤트 핸들러 설정
<button onclick="handleOnClick()">
Click Me!
</button>

// 리액트를 사용할 때의 이벤트 핸들러 설정
<button onClick={handleOnClick}>클릭하세요</button>

function Body() {
    function handleOnClick(e) { ①
      console.log(e.target.name);
    }
    return (
      <div className="body">
        <button name="A버튼" onClick={handleOnClick}> ②
          A 버튼
        </button>
        <button name="B버튼" onClick={handleOnClick}> ③
          B 버튼
        </button>
      </div>
    );
  }
  
  export default Body;

//State

import { useState } from "react"; ①

function Body() {
  const [count, setCount] = useState(0); ②
  return (
    <div>
      <h2>{count}</h2>
    </div>
  );
}

export default Body;

import { useState } from "react";

function Body() {
  const [count, setCount] = useState(0); 

  const onIncrease = () => { ①
    setCount(count + 1);
  };

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={onIncrease}>+</button>
    </div>
  );
}
export default Body;

import { useState } from "react";

function Body() {
  console.log("Update!"); ①

  const [count, setCount] = useState(0);

  const onIncrease = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={onIncrease}>+</button>
    </div>
  );
}
export default Body;

import { useState } from "react";

function Body() {
  const handleOnChange = (e) => { ①
    console.log(e.target.value);
  };
  return (
    <div>
      <input onChange={handleOnChange} /> ②
    </div>
  );
}
export default Body;

import { useState } from "react";

function Body() { 
  const [text, setText] = useState(""); ①
  const handleOnChange = (e) => {
    setText(e.target.value); ②
  };
  return (
    <div>
      <input value={text} onChange={handleOnChange} /> ③
      <div>{text}</div> ④
    </div>
  );
}

export default Body;

//useRef

import { useState } from "react";

function Body() {
  const [text, setText] = useState("");

  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  const handleOnClick = () => {
    alert(text);
  };

  return (
    <div>
      <input value={text} onChange={handleOnChange} />
      <button onClick={handleOnClick}>작성 완료</button>
    </div>
  );
}
export default Body;

import { useRef, useState } from "react";

function Body() {
  (...)
  const handleOnClick = () => {
    alert(text);
    textRef.current.value = "";
  };
  (...)
}
export default Body;

import { useRef, useState } from "react";

function Body() {
  const [text, setText] = useState("");
  const textRef = useRef();

  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  const handleOnClick = () => {
    if (text.length < 5) {
      textRef.current.focus(); ①
    } else {
      alert(text);
      setText(""); ②
    }
  };

  return (
    <div>
      <input ref={textRef} value={text} onChange={handleOnChange} />
      <button onClick={handleOnClick}>작성 완료</button>
    </div>
  );
}
export default Body;

