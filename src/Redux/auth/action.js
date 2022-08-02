import Axios from "axios";
const signInRequest = () => {
  return {
    type: "SIGNIN_REQUEST",
  };
};
const signInSuccess = (payload) => {
  return {
    type: "SIGNIN_SUCCESS",
    payload,
  };
};
const signInFailure = (payload) => {
  return {
    type: "SIGNIN_FAILURE",
    payload,
  };
};

const signIn = (payload) => (dispatch) => {
  dispatch(signInRequest());
  Axios.post("https://reqres.in/api/login", payload,)
    .then((res) => dispatch(signInSuccess(res.data)))
    .catch((err) => dispatch(signInFailure(err.data)));
};

export { signIn };
