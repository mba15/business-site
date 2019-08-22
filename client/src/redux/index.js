import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import contacts from "./contacts.js";

const rootReducer = combineReducers({contacts});

let store =createStore(rootReducer, applyMiddleware(thunk));

store.subscribe(() => {
    console.log(store.getState());
})

export default store;