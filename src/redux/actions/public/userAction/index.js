import { createAction } from "../../../../utils/index";
import { USER } from "./userActionTypes";

export const userAction = {
  singIn: (data) =>
    createAction(USER.SINGIN, {
      ...data,
      fetching: true,
      success: false,
      error: null,
    }),
  logIn: (data) =>
    createAction(USER.LOGIN, {
      ...data,
      fetching: true,
      success: false,
      error: null,
    }),
  recive: (data) =>
    createAction(USER.RECEIVE, {
      ...data,
      fetching: true,
      success: false,
      error: null,
    }),

  success: (data) =>
    createAction(USER.SUCCESS, {
      ...data,
      fetching: true,
      success: true,
      error: null,
    }),
  failure: (error) =>
    createAction(USER.FAILURE, {
      ...error,
      fetching: false,
      success: false,
    }),
};

export default userAction;
