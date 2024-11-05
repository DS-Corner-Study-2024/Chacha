import "./App.css";

function Header() {
  return (
    <header>
      <h1>header</h1>
    </header>
  );
}

function App() {
  return <div className="App"></div>;
}

export default App;



import "./App.css";

const Header = () => {
  (...)
};

function App() {
  return (
    <div className="App">
      <Header />
    </div>
  );
}
export default App;


function Header() {
    return (
      <header>
        <h1>header</h1>
      </header>
    );
  }
  
  export default Header;


