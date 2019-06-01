// 초기화 과정
import { createStore } from "redux";
import { allReducers } from "./reducers/";

export const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
); // state.
// Expected the reducer to be a function.
// 스토어가 그냥 만들어 지는 게 아님.
// reducer는 순수한 펑션으로 이뤄진다. !! 중요,.
// 화살표 두개. 입력 파라미터가 2개이다.

//console.log(store, store.getState());
// 디스페치 -> 퍼블리시
// 서브스크라이브 -> 가입
// 상태 가져오는 getState.
