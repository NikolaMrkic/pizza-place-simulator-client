import { createAction } from "../../../../utils/index";
import { INGREDIENT } from "./ingredientActionTypes";

export const ingredientAction = {
    request: () =>
        createAction(INGREDIENT.GET, {
            fetching: true,
            success: false,
            error: null,
        }),
    success: (data) =>
        createAction(INGREDIENT.SUCCESS, {
            ...data,
            fetching: true,
            success: true,
            error: null,
        }),
    failure: (error) =>
        createAction(INGREDIENT.FAILURE, {
            ...error,
            fetching: false,
            success: false,
        }),
};

export default ingredientAction;
