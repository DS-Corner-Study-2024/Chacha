function Body() {
  const numA = 1;
  const numB = 2;
  return (
    <div>
      <h1>body</h1>
      <h2>{numA + numB}</h2>
    </div>
  );
}
export default Body;



function Body() {
  const strA = "안녕";
  const strB = "리액트";
  return (
    <div>
      <h1>body</h1>
      <h2>{strA + strB}</h2>
    </div>
  );
}
export default Body;



function Body() {
  const boolA = true;
  const boolB = false;
  return (
    <div>
      <h1>body</h1>
      <h2>{boolA || boolB}</h2>
    </div>
  );
}
export default Body;