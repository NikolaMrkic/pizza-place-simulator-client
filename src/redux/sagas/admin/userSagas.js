import { put, call, takeLatest, all } from "redux-saga/effects";
import DataUtils from "../../../DataUtils";
import { userAdminAction } from "../../actions/admin/userAction";
import { USER_ADMIN } from "../../actions/admin/userAction/userActionTypes";

function* handleGetAdminUsers() {
  console.log("DOVLACIMMMMMMMMMMMMMMMMMMMMMM");

  try {
    const { data } = yield call(DataUtils.get, `/admin/users`);
    console.log("data from saga", data);
    yield put(userAdminAction.success({ data }));
  } catch (e) {
    yield put(userAdminAction.failure({ error: { ...e } }));
  }
}

function* handleGetOne(action) {
  try {
    const { id } = action.payload;
    const { data } = yield call(DataUtils.get, `/admin/user/` + id);
    console.log("data from saga handleGetOne", data);
    yield put(userAdminAction.success({ data }));
  } catch (e) {
    yield put(userAdminAction.failure({ error: { ...e } }));
  }
}

function* handlePost(action) {
  console.log("AKCIJAAAAAAAA", action);
  const user = action.payload;
  console.log("USER IZ SAGE ", user);

  try {
    const response = yield call(DataUtils.post, `/admin/user`, user);
    console.log("response from saga handlePost", response);
    console.log("response.data from saga handlePost", response.data);
    const userResponse = response.data;
    console.log("DOVUKAOOOOOOO responseee", userResponse);
    yield put(userAdminAction.recive({ userResponse }));
  } catch (e) {
    yield put(userAdminAction.failure({ error: { ...e } }));
  }
}

export function* watchAllUserAdminSagas() {
  yield all([
    takeLatest(USER_ADMIN.GET, handleGetAdminUsers),
    takeLatest(USER_ADMIN.GET_ONE, handleGetOne),
    takeLatest(USER_ADMIN.SAVE, handlePost),
    // takeLatest(USER_ADMIN.PUT, handlePut),
    // takeLatest(USER_ADMIN.PATCH, handlePatch),
    // takeLatest(USER_ADMIN.DELETE, handleDelete),
  ]);
}

export default watchAllUserAdminSagas;
