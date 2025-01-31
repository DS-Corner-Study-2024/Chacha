{
    type: 'ADD_TODO',
    data: {
      id: 1,
      text: '리덕스 배우기'
  }
  }
  
  {
    type: 'CHANGE_INPUT',
    text: '안녕하세요'
  }


  function addTodo(data) {
    return {
        type: 'ADD_TODO',
      data
    };
    }
    
    // 화살표 함수로도 만들 수 있습니다.
    const changeInput = text => ({ 
      type: 'CHANGE_INPUT',
    text
    });


    const initialState = {
        counter: 1
      };
      function reducer(state = initialState, action) {
      switch (action.type) {
        case INCREMENT:
          return {
              counter: state.counter + 1
          };
        default:
          return state;
      }
      }


      const listener = () => {
        console.log('상태가 업데이트됨');  
        }
        const unsubscribe = store.subscribe(listener);
        
        unsubscribe(); // 추후 구독을 비활성화할 때 함수를 호출



        #index.html

<html>
  <body>
    <div>바닐라 자바스크립트</div>
    <script src="./index.js"></script>
  </body>
</html>



#index.js

console.log('hello parcel');



<html>
  <head>
    <link rel="stylesheet" type="text/css" href="index.css" />
  </head>
  <body>
    <div class="toggle"></div>
    <hr />
    <h1>0</h1>
    <button id="increase">+1</button>
    <button id="decrease">-1</button>
    <script src="./index.js"></script>
  </body>
</html>


const divToggle = document.querySelector('.toggle');
const counter = document.querySelector('h1');
const btnIncrease = document.querySelector('#increase');
const btnDecrease = document.querySelector('#decrease');

const TOGGLE_SWITCH = 'TOGGLE_SWITCH';
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';

const toggleSwitch = () => ({ type: TOGGLE_SWITCH });
const increase = difference => ({ type: INCREASE, difference });
const decrease = () => ({ type: DECREASE });

const initialState = {
  toggle: false,
  counter: 0
};



(...)

// state가 undefined일 때는 initialState를 기본값으로 사용
function reducer(state = initialState, action) {
  // action.type에 따라 다른 작업을 처리함
  switch (action.type) {
    case TOGGLE_SWITCH:
      return {
        ...state, // 불변성 유지를 해 주어야 합니다.
        toggle: !state.toggle
      };
    case INCREASE:
      return {
        ...state,
        counter: state.counter + action.difference
      };
    case DECREASE:
      return {
        ...state,
        counter: state.counter - 1
      };
    default:
      return state;
  }
}

(...)

const store = createStore(reducer);

const render = () => {
  const state = store.getState(); // 현재 상태를 불러옵니다.
  // 토글 처리
  if (state.toggle) {
    divToggle.classList.add('active');
  } else {
    divToggle.classList.remove('active');
  }
  // 카운터 처리
  counter.innerText = state.counter;
};

