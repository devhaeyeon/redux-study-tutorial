import React from "react";
import "./styles.css";
import { connect } from "react-redux";

function App(props) {
  console.log(props);
  return <div />;
}

// 네이밍 규칙.
const mapStateProps = state => ({
  // props:state
  products: state.productReducer,
  user: state.userReducer
});

// 괄호 두개 . 문법 적으로 커링 펑션. hoc
// 상속은 디펜던시가 많아서 사용하지 않고, 컴포지션 기법을 사용함. 이것이 컴포지션 기법이다. hoc
// hoc 이란? 실체는 function이다. 입력으로는 컴포넌트를 받고 새로운 컴포넌트를 리턴한다.
// 컴포넌트 확장을 위해서 상속이 아닌 기존 컴포넌트를 건드리지 않고, 추가적인 기능을 넣는 것임.
// hoc 만들어서 함수 만들고 입력 파라미터 넣으면 새로운 컴포넌트 리턴.
// 실체는 함수.기존 컴포넌트 넣고. 새로은 것을 만들어낸다.
// 리액트-리덕스 기능 추가
// 스토로 부터 받도록 변경이 됨.
// 프로덕트가 변경, 서브스크라이브. , 프롭스로 내려 받도록 한다.
export default connect(mapStateProps)(App);

//export default App;
