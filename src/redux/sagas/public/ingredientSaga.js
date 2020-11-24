import { put, call, takeLatest, all } from "redux-saga/effects";
import DataUtils from "../../../DataUtils";
import { ingredientAction } from "../../actions/public/ingredientAction/";
import { INGREDIENT } from "../../actions/public/ingredientAction/ingredientActionTypes";

function* handleGetIngredient() {
  try {
    const { data } = yield call(DataUtils.get, `/public/ingredients`);
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
