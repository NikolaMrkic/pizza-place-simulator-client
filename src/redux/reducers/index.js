import { combineReducers } from "redux";
import userPublicReducer from "./public/userReducer";
import ingredientReducer from "./public/ingredientReducer"
import orderReducer from "./public/orderReducer"
import { reducer as formReducer } from "redux-form/";

export default function createReducer(asyncReducers) {
  return combineReducers({
    //Global state
    usersState: userPublicReducer,
    ingredient: ingredientReducer,
    ordersState: orderReducer,
    /**formReducer is an alias for reducer */
    //using formReducer should have the key "form" in the redux store this should be for all the form
    form: formReducer,
    ...asyncReducers,
  });
}
