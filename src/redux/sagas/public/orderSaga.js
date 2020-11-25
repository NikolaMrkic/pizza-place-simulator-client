import { put, call, takeLatest, all } from "redux-saga/effects";
import DataUtils from "../../../DataUtils";
import { orderAction } from "../../actions/public/ordersAction";
import { ORDER } from "../../actions/public/ordersAction/ordersActionTypes";

function* handleGetOrders() {
    try {
        const { data } = yield call(DataUtils.get, `/orders`);
        yield put(orderAction.success({ data }));
    } catch (e) {
        yield put(orderAction.failure({ error: { ...e } }));
    }
}

function* handlePostOrder(action) {
    const order = action.payload;
    try {
        const response = yield call(DataUtils.post, `/create-order`, order);
        const orderResponse = response.data.order;
        yield put(orderAction.recive({ orderResponse }));
    } catch (e) {
        yield put(orderAction.failure({ error: { ...e } }));
    }
}

export function* watchAllOrdersSagas() {
    yield all([
        takeLatest(ORDER.GET, handleGetOrders),
        takeLatest(ORDER.SAVE, handlePostOrder)],
    );
}

export default watchAllOrdersSagas;
