import { put, call, takeLatest, all } from "redux-saga/effects";
import DataUtils from "../../../DataUtils";
import { ingredientAction } from "../../actions/public/ingredientAction/";
import { INGREDIENT } from "../../actions/public/ingredientAction/ingredientActionTypes";

function* handleGetIngredient() {
  console.log("DOVLACIMMMMMMMMMMMMMMMMMMMMMM");
  try {
    const { data } = yield call(DataUtils.get, `/public/ingredients`);
    console.log('data iz sage', data);
    console.log("data from saga", data);
    yield put(ingredientAction.success({ data }));
  } catch (e) {
    yield put(ingredientAction.failure({ error: { ...e } }));
  }
}

export function* watchAllIngredientSagas() {
  yield all(
    [takeLatest(INGREDIENT.GET, handleGetIngredient)],
  );
}

export default watchAllIngredientSagas;
