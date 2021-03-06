import {
    createStore as reduxCreateStore,
    combineReducers,
    applyMiddleware
} from "redux";
import {connectRouter,routerMiddleware} from "connected-react-router";
// add thunk ↓
import thunk from 'redux-thunk';
import {UsersReducer} from "../users/reducers"
export default function createStore(history){
    return reduxCreateStore(
        combineReducers({
            router: connectRouter(history),
            users: UsersReducer
        }),
        applyMiddleware(
            routerMiddleware(history),
            // add thunk ↓
            thunk
        )
    )
}