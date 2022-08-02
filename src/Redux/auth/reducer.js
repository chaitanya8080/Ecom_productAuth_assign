const initialState = {
    auth: false,
    token: "",
    error: false,
  };
  
  const authReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
      case "SIGNIN_REQUEST":
        return {
          auth: false,
          token: "",
          error: false,
        };
      case "SIGNIN_SUCCESS":
        return {
          auth: true,
          token: payload.token,
          error: false,
        };
      case "SIGNIN_FAILURE":
        return {
          auth: false,
          error: payload,
        };
      default:
        return state;
    }
  };
  export default authReducer;
  