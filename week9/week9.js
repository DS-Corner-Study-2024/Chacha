import "./App.css";

function App() {
  return <div className="App"></div>;
}
export default App;

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

import "./App.css";

function App() {
  return (
    <div className="App">
      <h2>헬로 마이 리액트</h2>
    </div>
  );
}
export default App;

body {
    margin: 0px; ①
  }

  .App {
    max-width: 500px; ①
    width: 100%; ②
    margin: 0 auto; ③
    box-sizing: border-box; ④
    padding: 20px; ⑤
    border: 1px solid gray; ⑥
  }

  import "./App.css";

  function App() {
    return (
      <div className="App">
        <div>Header</div>
        <div>Todo Editor</div>
        <div>Todo List</div>
      </div>
    );
  }
  export default App;

  .App {
    (...)
    display: flex; ①
    flex-direction: column; ②
    gap: 30px;③
  }

  const Header = () => {
    return <div className="Header">Header Component</div>;
  };
  export default Header;

  import "./App.css";
  import Header from "./component/Header";
  
  function App() {
    return (
      <div className="App">
        <Header />
        <div>Todo Editor</div>
        <div>Todo List</div>
      </div>
    );
  }
  export default App;


  const Header = () => {
    return (
      <div className="Header">
        <h3>오늘은 📅</h3> ①
        <h1>{new Date().toDateString()}</h1> ②
      </div>
    );
  };
  export default Header;

  .Header h1 { ①
    margin-bottom: 0px;
    color: #1f93ff;
  }

  import "./Header.css"; ①

  const Header = () => {
    return (
      <div className="Header">
        <h3>오늘은 📅</h3>
        <h1>{new Date().toDateString()}</h1>
      </div>
    );
  };
  export default Header;

  import "./App.css";
  import Header from "./component/Header";
  import TodoEditor from "./component/TodoEditor";
  
  function App() {
    return (
      <div className="App">
        <Header />
        <TodoEditor />
        <div>Todo List</div>
      </div>
    );
  }
  export default App;