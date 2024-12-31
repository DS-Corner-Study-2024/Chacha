(...)
function App() {
  (...)
  return (
    <div className="App">
      <Header />
      <TodoEditor onCreate={onCreate} />
      <TodoList todo={todo} />
    </div>
  );
}
export default App;

import TodoItem from "./TodoItem";
import "./TodoList.css";

const TodoList = ({ todo }) => { ①
  return (
    <div className="TodoList">
      <h4>Todo List 🌱</h4>
      <input className="searchbar" placeholder="검색어를 입력하세요" />
      <div className="list_wrapper">
        {todo.map((it) => ( ②
          <div>{it.content}</div>
        ))}
      </div>
    </div>
  );
};
export default TodoList;

import TodoItem from "./TodoItem";
import "./TodoList.css";

const TodoList = ({ todo }) => { 
  return (
    <div className="TodoList">
      <h4>Todo List 🌱</h4>
      <input className="searchbar" placeholder="검색어를 입력하세요" />
      <div className="list_wrapper">
        {todo.map((it) => (
          <TodoItem {...it} /> ①
        ))}
      </div>
    </div>
  );
};
export default TodoList;

import "./TodoItem.css";

const TodoItem = ({ id, content, isDone, createdDate }) => { ①
  return (
    <div className="TodoItem">
      <div className="checkbox_col">
        <input checked={isDone} type="checkbox" /> ②
      </div>
      <div className="title_col">{content}</div> ③
      <div className="date_col">
        {new Date(createdDate).toLocaleDateString()} ④
      </div>
      <div className="btn_col">
        <button>삭제</button>
      </div>
    </div>
  );
};
export default TodoItem;

import TodoItem from "./TodoItem";
import "./TodoList.css";

const TodoList = ({ todo }) => {
  return (
    <div className="TodoList">
      (...)
      <div className="list_wrapper">
        {todo.map((it) => (
          <TodoItem key={it.id} {...it} /> ①
b        ))}
      </div>
    </div>
  );
};
export default TodoList;

import { useState } from "react"; // ①
(...)

const TodoList = ({ todo }) => {
  const [search, setSearch] = useState(""); 
  const onChangeSearch = (e) => { // ②
    setSearch(e.target.value);
  };

  return (
    <div className="TodoList">
      <h4>Todo List 🌱</h4>
      <input
        value={search} // ③
        onChange={onChangeSearch} // ④
        className="searchbar"
        placeholder="검색어를 입력하세요"
      />
      <div className="list_wrapper">
        {todo.map((it) => (
          <TodoItem key={it.id} {...it} />
        ))}
      </div>
    </div>
  );
};
export default TodoList;

(...)
const TodoList = ({ todo }) => {
  (...)
  const getSearchResult = () => {
    return search === ""
      ? todo
      : todo.filter((it) => it.content.includes(search));
  };

  return (
    <div className="TodoList">
      (...)
      <div className="list_wrapper">
        {getSearchResult().map((it) => ( ②
          <TodoItem key={it.id} {...it} />
        ))}
      </div>
    </div>
  );
};
export default TodoList;

(...)
const getSearchResult = () => {
    return search === ""
      ? todo
      : todo.filter((it) =>
          it.content.toLowerCase().includes(search.toLowerCase()) ①
        );
  };
(...)

