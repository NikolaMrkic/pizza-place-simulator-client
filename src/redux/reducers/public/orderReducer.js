import { ORDER } from "../../actions/public/ordersAction/ordersActionTypes";

const initialState = {
    data: [],
    fetching: false,
    success: false,
    error: null,
    test: null
};

export default function orderReducer(state = initialState, action) {
    switch (action.type) {
        case ORDER.RECEIVE:
            return {
                ...state,
                data: [...state.data, action.payload.orderResponse],
                fetching: true,
                success: true,
                error: null,
            };
        case ORDER.GET:
            return {
                ...state,
            };
        case ORDER.SUCCESS:
            return {
                ...state,
                data: action.payload.data.orders,
                fetching: true,
                success: true,
                error: null,
            };
        case ORDER.FAILURE:
            return {
                ...state,
            };
        default:
            return {
                ...state,
            };
    }
}
