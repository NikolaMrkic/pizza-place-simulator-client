import { createActionTypes } from "../../../../utils/index";

export const USER_ADMIN = createActionTypes("USER_ADMIN", [
  "GET",
  "GET_ONE",
  "RECEIVE",
  "SAVE",
  "PUT",
  "DELETE",
  "SUCCESS",
  "SUCCESS_ONE",
  "FAILURE",
]);

export default USER_ADMIN;
