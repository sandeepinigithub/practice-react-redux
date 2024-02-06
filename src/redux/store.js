import { legacy_createStore } from "redux";
import employeeReducer from "./employee/employeeReducers";

const store = legacy_createStore(employeeReducer);



export default store;