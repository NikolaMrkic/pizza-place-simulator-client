import { put, call, takeLatest, all } from "redux-saga/effects";
import DataUtils from "../../../DataUtils";
import { userAction } from "../../actions/public/userAction";
// import { orderAction } from "../../actions/public/ordersAction";
import { USER } from "../../actions/public/userAction/userActionTypes";

function* singIn(action) {
  const user = action.payload;

  try {
    const response = yield call(DataUtils.post, `/sign-up`, user);
    const userResponse = response.data;
    yield put(userAction.success({ userResponse }));
  } catch (e) {
    yield put(userAction.failure({ error: { ...e } }));
  }
}

function* logIn(action) {
  const user = action.payload;

  try {
    const response = yield call(DataUtils.post, `/login`, user);
    const userResponse = response.data;
    yield put(userAction.success({ userResponse }));
  } catch (e) {
    yield put(userAction.failure({ error: { ...e } }));
  }
}

export function* watchAllUserAdminSagas() {
  yield all([
    takeLatest(USER.SINGIN, singIn),
    takeLatest(USER.LOGIN, logIn),

  ]);
}

export default watchAllUserAdminSagas;
