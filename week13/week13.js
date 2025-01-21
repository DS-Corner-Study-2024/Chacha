import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);


@import url("https://fonts.googleapis.com/css2?family=Nanum+Pen+Script&family=Yeon+Sung&display=swap");

body {
  font-family: "Nanum Pen Script";
  margin: 0px;
}


import "./App.css";
function App() {
  return (
    <div className="App">
      <h1>감정 일기장</h1>
    </div>
  );
}
export default App;


(...)

body {
  font-family: "Yeon Sung";
  margin: 0px;
}


import emotion1 from "./img/emotion1.png";
function App() {
  return (
    <div className="App">
      <img alt="감정1" src={emotion1} />
    </div>
  );
}
export default App;


import emotion1 from "./img/emotion1.png";
import emotion2 from "./img/emotion2.png";
import emotion3 from "./img/emotion3.png";
import emotion4 from "./img/emotion4.png";
import emotion5 from "./img/emotion5.png";
export const getEmotionImgById = (emotionId) => {
  const targetEmotionId = String(emotionId);
  switch (targetEmotionId) {
    case "1":
      return emotion1;
      case "2":
        return emotion2;
      case "3":
        return emotion3;
      case "4":
        return emotion4;
      case "5":
        return emotion5;
      default:
        return null;
    }
};



import { getEmotionImgById } from "./util";
function App() {
  return (
    <div className="App">
      <img alt="감정1" src={getEmotionImgById(1)} />
      <img alt="감정2" src={getEmotionImgById(2)} />
      <img alt="감정3" src={getEmotionImgById(3)} />
      <img alt="감정4" src={getEmotionImgById(4)} />
      <img alt="감정5" src={getEmotionImgById(5)} />
    </div>
      );
    }
    export default App;

