import { all } from "redux-saga/effects";
// import watchAllUserAdminSagas from "./admin/userSagas";
import watchAllIngredientSagas from "./public/ingredientSaga";
import watchAllOrdersSagas from "./public/orderSaga";
import watchAllUsersSagas from "./public/userSagas";


export default function* rootSaga() {
  yield all([
    watchAllIngredientSagas(),
    watchAllOrdersSagas(),
    watchAllUsersSagas()
  ])

}


