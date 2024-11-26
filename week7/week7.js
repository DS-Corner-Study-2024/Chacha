npx create-react-app .

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

import "./App.css";

function App() {
  return <div className="App"></div>;
}

export default App;

const Viewer = () => {
    return (
      <div>
        <div>현재 카운트: </div>
        <h1>0</h1>
      </div>
    );
  };
  export default Viewer;

  import "./App.css";
import Viewer from "./component/Viewer"; ①

function App() {
  return (
    <div className="App">
      <h1>Simple Counter</h1> ②
      <section>
        <Viewer /> ③
      </section>
    </div>
  );
}

export default App;

const Controller = () => {
    return (
      <div>
        <button>-1</button>
        <button>-10</button>
        <button>-100</button>
        <button>+100</button>
        <button>+10</button>
        <button>+1</button>
      </div>
    );
  };
  export default Controller;

  import "./App.css";
import Controller from "./component/Controller"; ①
import Viewer from "./component/Viewer";

function App() {
  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <Viewer />
      </section>
      <section>
        <Controller /> ②
      </section>
    </div>
  );
}

export default App;


body {
    padding: 20px;
  }
  
  .App {
    margin: 0 auto;
    width: 500px;
  }
  
  .App > section { ①
    padding: 20px;
    background-color: rgb(245, 245, 245);
    border: 1px solid rgb(240, 240, 240);
    border-radius: 5px;
    margin-bottom: 10px;
  }

  import { useState } from "react";

const Viewer = () => {
  const [count, setCount] = useState(0); ①
  return (
    <div>
      <div>현재 카운트: </div>
      <h1>{count}</h1> ②
    </div>
  );
};

export default Viewer;

import { useState } from "react";
const Controller = () => {
  const [count, setCount] = useState(0);
  const handleSetCount = (value) => { ①
    setCount(count + value);
  };

  return (
    <div>
      <button onClick={() => handleSetCount(-1)}>-1</button> ②
      <button onClick={() => handleSetCount(-10)}>-10</button> ③
      <button onClick={() => handleSetCount(-100)}>-100</button> ④
      <button onClick={() => handleSetCount(100)}>+100</button> ⑤
      <button onClick={() => handleSetCount(10)}>+10</button> ⑥
      <button onClick={() => handleSetCount(1)}>+1</button> ⑦
    </div>
  );
};
export default Controller;

//으아집에가고싶다내귤...귤...ㅠㅠㅠ 귤먹고싶어ㅠㅠㅠ
//걍이렇게눕고싶음ㅇ-<

import "./App.css";
import { useState } from "react";
import Controller from "./component/Controller";
import Viewer from "./component/Viewer";

function App() {
  const [count, setCount] = useState(0);
  const handleSetCount = (value) => {
    setCount(count + value);
  };

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <Viewer count={count} /> ①
      </section>
      <section>
        <Controller handleSetCount={handleSetCount} /> ②
      </section>
    </div>
  );
}
export default App;

const Controller = ({ handleSetCount }) => {
    return (
      <div>
        <button onClick={() => handleSetCount(-1)}>-1</button>
        <button onClick={() => handleSetCount(-10)}>-10</button>
        <button onClick={() => handleSetCount(-100)}>-100</button>
        <button onClick={() => handleSetCount(100)}>+100</button>
        <button onClick={() => handleSetCount(10)}>+10</button>
        <button onClick={() => handleSetCount(1)}>+1</button>
      </div>
    );
  };
  export default Controller;