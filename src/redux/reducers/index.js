import { combineReducers } from "redux";
import userAdminReducer from "./admin/userReducer";
import ingredientReducer from "./public/ingredientReducer"
import { reducer as formReducer } from "redux-form/";

export default function createReducer(asyncReducers) {
  return combineReducers({
    //Global state
    adminUsers: userAdminReducer,
    ingredient: ingredientReducer,
    /**formReducer is an alias for reducer */
    //using formReducer should have the key "form" in the redux store this should be for all the form
    form: formReducer,
    ...asyncReducers,
  });
}
