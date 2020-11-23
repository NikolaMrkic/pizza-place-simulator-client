import { createAction } from "../../../../utils/index";
import { USER_ADMIN } from "./userActionTypes";

export const userAdminAction = {
  request: () =>
    createAction(USER_ADMIN.GET, {
      fetching: true,
      success: false,
      error: null,
    }),
  requestOne: (id) =>
    createAction(USER_ADMIN.GET_ONE, {
      id,
      fetching: true,
      success: true,
      error: null,
    }),
  save: (data) =>
    createAction(USER_ADMIN.SAVE, {
      /// ovo me je zezalo da ubacim objekat u array nakon responsa
      ...data,
      fetching: true,
      success: false,
      error: null,
    }),
  recive: (data) =>
    createAction(USER_ADMIN.RECEIVE, {
      users: data,
      fetching: true,
      success: true,
      error: null,
    }),
  put: (id, data) =>
    createAction(USER_ADMIN.PUT, {
      id,
      ...data,
      fetching: true,
      success: false,
      error: null,
    }),
  delete: (id) =>
    createAction(USER_ADMIN.DELETE, {
      id,
      fetching: true,
      success: false,
      error: null,
    }),
  success: (data) =>
    createAction(USER_ADMIN.SUCCESS, {
      ...data,
      fetching: true,
      success: true,
      error: null,
    }),
  failure: (error) =>
    createAction(USER_ADMIN.FAILURE, {
      ...error,
      fetching: false,
      success: false,
    }),
};

export default userAdminAction;
