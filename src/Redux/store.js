

import {legacy_createStore, applyMiddleware, combineReducers} from "redux";

import thunk from "redux-thunk"
import authReducer from "../Redux/auth/reducer"
import { productReducer } from "./products/reducer";
import { cartReducer } from "./cart/reducer";
const rootReducers = combineReducers({
    product:productReducer,
   cart: cartReducer,
   authReducer: authReducer
})
const store = legacy_createStore(rootReducers,applyMiddleware(thunk))

export {store};