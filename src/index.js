import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore } from "redux";
const reducer = (state, action) => {
  if (action.type === "changeState") {
    return action.payload.newState;
  }
  return "state";
};
// 초기화 과정
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
); // state.
// Expected the reducer to be a function.
// 스토어가 그냥 만들어 지는 게 아님.
// reducer는 순수한 펑션으로 이뤄진다. !! 중요,.
// 화살표 두개. 입력 파라미터가 2개이다.

console.log(store, store.getState());
// 디스페치 -> 퍼블리시
// 서브스크라이브 -> 가입
// 상태 가져오는 getState.

// 1.subscribe , 3. 데이터 수신.
store.subscribe(() => console.log("subscriber", store.getState()));

// 2. publish: action => 객체다.
const action = {
  type: "changeState",
  payload: {
    newState: "New State"
  }
};

store.dispatch(action); // state를 mutate를 하기 위한 것이다. state를 유일한 방법은 액션을 디스패치하는 것 밖에 없다. 디스패치해야 내부에 있는 것이 바뀐다.
// 서브스크라이브 가입자에게 바뀐 메서드를 전달
// 코딩은 뷰, 액션까지 구현했지만 내부적으로 스테이트 받고, 액션 받고 난다음에 새로운 스테이트를 리턴한다.

ReactDOM.render(<App />, document.getElementById("root"));
