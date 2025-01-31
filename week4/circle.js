const PI = 3.141592;

function getArea(radius) {
  return PI * radius * radius;
}

function getCircumference(radius) {
  return 2 * PI * radius;
}

//export { PI, getArea, getCircumference }; // 한 번에 모듈에서 값/함수 내보내기

export default { PI, getArea, getCircumference }; // 기본값으로 내보내기
