import { put, call, takeLatest, all } from "redux-saga/effects";
import DataUtils from "../../../DataUtils";
import { userAction } from "../../actions/public/userAction";
// import { orderAction } from "../../actions/public/ordersAction";
import { USER } from "../../actions/public/userAction/userActionTypes";

function* singIn(action) {
  console.log("AKCIJAAAAAAAA", action);
  const user = action.payload;
  console.log("USER IZ SAGE ", user);

  try {
    const response = yield call(DataUtils.post, `/sign-up`, user);
    console.log("response from saga handlePost", response);
    console.log("response.data from saga handlePost", response.data);
    const userResponse = response.data;
    console.log("DOVUKAOOOOOOO responseee", userResponse);
    yield put(userAction.success({ userResponse }));
  } catch (e) {
    yield put(userAction.failure({ error: { ...e } }));
  }
}

function* logIn(action) {
  console.log("AKCIJAAAAAAAA", action);
  const user = action.payload;
  console.log("USER IZ SAGE ", user);

  try {
    const response = yield call(DataUtils.post, `/login`, user);
    console.log("response from saga handlePost", response);
    console.log("response.data from saga handlePost", response.data);
    const userResponse = response.data;
    console.log("DOVUKAOOOOOOO responseee", userResponse);
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
