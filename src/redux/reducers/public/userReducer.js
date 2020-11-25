import { USER } from "../../actions/public/userAction/userActionTypes";

const initialState = {
  users: [],
  currentUser: {},
  fetching: false,
  success: false,
  error: null,
};

export default function userAdminReducer(state = initialState, action) {
  switch (action.type) {
    case USER.RECEIVE:
      return {
        ...state,
        users: [...state.users, action.payload.users.userResponse],
        fetching: true,
        success: true,
        error: null,
      };
    // case USER.SINGIN:
    //   return {
    //     ...state,
    //   };
    case USER.SUCCESS:
      return {
        ...state,
        users: action.payload.data,
        fetching: true,
        success: true,
        error: null,
      };
    case USER.FAILURE:
      break;
    default:
      return {
        ...state,
      };
  }
}
