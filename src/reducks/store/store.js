import {
    createStore as reduxCreateStore,
    combineReducers,
    applyMiddleware
} from 'redux';
// ③非同期処理
import thunk from 'redux-thunk';

import {connectRouter, routerMiddleware} from "connected-react-router";
// ② routing設定
import {UsersReducer} from "../users/reducers";

// ② routing設定 (history) 追加
export default function createStore(history) {
    return reduxCreateStore (
        combineReducers({
            // ② routing設定
            router: connectRouter(history),
            users: UsersReducer
        }),
       // ② routing設定
        applyMiddleware(
           routerMiddleware(history),
           // ③非同期処理
           thunk
        )
    )
}