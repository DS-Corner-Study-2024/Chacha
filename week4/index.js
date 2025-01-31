// node.js 패키지 > 여러 js파일을 패키지로 관리(json) < npm사용
/*
import { PI, getArea, getCircumference } from "./circle.js";
console.log(PI, getArea(1), getCircumference(1));



import * as circle from "./circle.js"; // 전부 불러오기
console.log(circle.PI, circle.getArea(1), circle.getCircumference(1));



import circle from "./circle.js"; // 기본값으로 불러와서 이름 지정
console.log(circle.PI, circle.getArea(1), circle.getCircumference(1));

// 출력 : 3.141592 3.141592 6.283184


// json:dependency로 라이브러리 명시 / -lock.json:버전
// 다른사람과 공유시:
// node_modules 빼고 package.json과 package-lock.json만 공유
// >npm install로 라이브러리 재설치cO
*/

import lodash from "lodash";

const arr = [1, 1, 1, 2, 2, 1, 1, 4, 4, 3, 2];
const uniqueArr = lodash.uniqBy(arr); // lodash의 uniqBy 메서드는 인수로 전달한 배열에서 중복값을 제거하고 반환

console.log(uniqueArr);

// [1, 2, 4, 3]