import {applyMiddleware, combineReducers, createStore} from "redux";
import {Reducer} from "../reducer";
import {BasketReducer} from "../reducer/basketReducer";
import {FavoriteReducer} from "../reducer/favoriteReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";

export const store = createStore(combineReducers({
    main :Reducer ,
    basket : BasketReducer ,
    favorite : FavoriteReducer
}), composeWithDevTools(applyMiddleware(thunk)))