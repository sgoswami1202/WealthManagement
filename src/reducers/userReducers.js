import { GET_USERS } from "../actions/types";

const initialstate = {
  users: [],
  user: {},
};

export default function (state = initialstate, action) {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users: action.payload,
      };

    default:
      return state;
  }
}
