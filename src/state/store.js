import { configureStore } from "@reduxjs/toolkit";
import reducers from "./reducers";
import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";


export const store = createStore(
    reducers,applyMiddleware(thunk)
);

/*
export const store = configureStore({
    reducer:reducers
});
*/