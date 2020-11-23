import { createActionTypes } from "../../../../utils/index";

export const INGREDIENT = createActionTypes("INGREDIENT", [
    "GET",
    "SUCCESS",
    "FAILURE",
]);

export default INGREDIENT;
