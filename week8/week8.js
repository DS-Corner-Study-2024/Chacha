import React, { useState, useMemo, useCallback } from 'react';
 
const getAverage = numbers => {
  console.log('평균값 계산 중..');
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};
 
const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState('');
 
  const onChange = useCallback(e => {
    setNumber(e.target.value);
  }, []); 
  
  const onInsert = useCallback(() => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber('');
  },[number,list]); 
 
  const avg = useMemo(() => getAverage(list), [list]);
 
  return (
    <div>
      <input value={number} onChange={onChange}  />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>평균값:</b> {avg}
      </div>
    </div>
  );
};
 
export default Average;

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

(...)
function App() {
  (...)
  const onUpdate = (targetId) => { ①
    setTodo(
      todo.map((it) => { ②
        if (it.id === targetId) {
          return {
            ...it,
            isDone: !it.isDone,
          };
        } else {
          return it;
        }
      })
    );
  };

  return (
    <div className="App">
      <Header />
      <TodoEditor onCreate={onCreate} />
      <TodoList todo={todo} onUpdate={onUpdate} /> ③
    </div>
  );
}
export default App;