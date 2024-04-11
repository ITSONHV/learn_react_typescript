import { combineReducers } from "redux";
import authReducer, { AuthState } from "./authReducer";
import { configureStore } from "@reduxjs/toolkit";

export interface RootState {
    auth : AuthState
}

const rootReducer = combineReducers({auth: authReducer})
const store = configureStore({reducer: rootReducer});

export default store;