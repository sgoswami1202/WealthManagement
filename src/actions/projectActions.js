import axios from "axios";
import { GET_ERRORS, GET_USERS } from "./types";

export const createUser = (user, history) => async (dispatch) => {
  try {
    const res = await axios.post("http://localhost:9090/users", user);
    history.push("/dashboard");
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    });
  }
};

export const getUsers = () => async (dispatch) => {
  const res = await axios.get("https//localhost:9090/users");
  dispatch({
    type: GET_USERS,
    payload: res.data,
  });
};
