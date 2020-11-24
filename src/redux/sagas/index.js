import { all } from "redux-saga/effects";
// import watchAllUserAdminSagas from "./admin/userSagas";
import watchAllIngredientSagas from "./public/ingredientSaga";
import watchAllOrdersSagas from "./public/orderSaga";

export default function* rootSaga() {
  yield all([
    watchAllIngredientSagas(),
    watchAllOrdersSagas()
  ])

}


