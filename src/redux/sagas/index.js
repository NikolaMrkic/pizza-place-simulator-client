import { all, fork } from "redux-saga/effects";
import watchAllUserAdminSagas from "./admin/userSagas";
import watchAllIngredientSagas from "./public/ingredientSaga";


export default function* rootSaga() {
  yield all([fork(watchAllIngredientSagas)]);
}


