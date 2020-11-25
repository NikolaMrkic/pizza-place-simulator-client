import { createActionTypes } from "../../../../utils/index";

export const ORDER = createActionTypes("ORDER", [
    "SAVE",
    "RECEIVE",
    "GET",
    "SUCCESS",
    "FAILURE",
]);

export default ORDER;
