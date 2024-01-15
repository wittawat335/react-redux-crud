import { CompanyReducer } from "./reducer";
import { composeWithDevTools } from "@redux-devtools/extension";
import { createStore } from "redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import { thunk } from "redux-thunk";

const rootreducer = combineReducers({ company: CompanyReducer });
const store = configureStore({
  reducer: rootreducer,
  devTools: true,
});
export default store;
