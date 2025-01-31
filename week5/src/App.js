import "./App.css";

import Header from "./component/Header";
import Body from "./component/Body";
import Footer from "./component/Footer";


// App 컴포넌트가 Header 컴포넌트를 포함하고 있고, App 컴포넌트가 웹페이지의 루트(root)에 표시됨

/*
// 함수 컴포넌트
  // 자식 컴포넌트
//function Header () { // 1 함수 선언
const Header = () => {  // 화살표 함수로도 가능
  return ( // 2 HTML요소 반환
    <header>
      <h1>header</h1>
    </header>
  );
}
*/



// Header 컴포넌트 페이지 렌더링
  // 부모 컴포넌트
function App() {
  return ( // Header 함수의 반환값
    <div className="App"> 
      <Header /> 
      <Body />
      <Footer />
    </div>
  );
}

export default App;