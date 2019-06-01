import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore } from "redux";

const store = createStore();
// Expected the reducer to be a function.
// 스토어가 그냥 만들어 지는 게 아님.
// reducer는 순수한 펑션으로 이뤄진다. !! 중요,.
// 화살표 두개. 입력 파라미터가 2개이다.

consolelog(stroe);

ReactDOM.render(<App />, document.getElementById("root"));
