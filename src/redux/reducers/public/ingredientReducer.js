import { INGREDIENT } from "../../actions/public/ingredientAction/ingredientActionTypes";

const initialState = {
    data: [],
    fetching: false,
    success: false,
    error: null,
};

export default function ingredientReducer(state = initialState, action) {
    switch (action.type) {
        case INGREDIENT.GET:
            return {
                ...state,
            };
        case INGREDIENT.SUCCESS:
            return {
                ...state,
                data: action.payload.data.ingredients,
                fetching: true,
                success: true,
                error: null,
            };
        case INGREDIENT.FAILURE:
            break;
        default:
            return {
                ...state,
            };
    }
}
