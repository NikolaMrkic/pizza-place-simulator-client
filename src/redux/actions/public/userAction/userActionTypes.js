import { createActionTypes } from "../../../../utils/index";

export const USER = createActionTypes("USER", [
  "RECEIVE",
  "SINGIN",
  "LOGIN",
  "SUCCESS",
  "FAILURE",
]);

export default USER;
