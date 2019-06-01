import { combineReducers } from "redux";
import { productReducer } from "./product";
import { userReducer } from "./user";

// 네임드 익스포트.
export const allReducers = combineReducers({
  products: productReducer,
  user: userReducer
});
