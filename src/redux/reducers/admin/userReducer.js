import { USER_ADMIN } from "../../actions/admin/userAction/userActionTypes";

const initialState = {
  users: [],
  currentUser: {},
  fetching: false,
  success: false,
  error: null,
};

export default function userAdminReducer(state = initialState, action) {
  switch (action.type) {
    case USER_ADMIN.GET:
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case USER_ADMIN.GET_ONE:
      return {
        ...state,
        currentUser: action.payload.data,
      };
    case USER_ADMIN.RECEIVE:
      return {
        ...state,
        users: [...state.users, action.payload.users.userResponse],
        fetching: true,
        success: true,
        error: null,
      };
    case USER_ADMIN.SAVE:
      return {
        ...state,
      };
    case USER_ADMIN.UPDATE:
    case USER_ADMIN.DELETE:
    case USER_ADMIN.SUCCESS:
      return {
        ...state,
        users: action.payload.data,
        fetching: true,
        success: true,
        error: null,
      };
    case USER_ADMIN.SUCCESS_ONE:
      return state.merge({ currentUser: action.payload.data });
    case USER_ADMIN.FAILURE:
      break;
    default:
      return {
        ...state,
      };
  }
}
