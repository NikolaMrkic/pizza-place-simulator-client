import { createAction } from "../../../../utils/index";
import { ORDER } from "./ordersActionTypes";

export const orderAction = {
    save: (data) =>
        createAction(ORDER.SAVE, {
            ...data,
            fetching: true,
            success: false,
            error: null,
        }),
    recive: (data) =>
        createAction(ORDER.RECEIVE, {
            ...data,
        }),
    request: () =>
        createAction(ORDER.GET, {
            fetching: true,
            success: false,
            error: null,
        }),
    success: (data) =>
        createAction(ORDER.SUCCESS, {
            ...data,
            fetching: true,
            success: true,
            error: null,
        }),
    failure: (error) =>
        createAction(ORDER.FAILURE, {
            ...error,
            fetching: false,
            success: false,
        }),
};

export default orderAction;
