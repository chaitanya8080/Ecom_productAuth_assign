import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../Redux/auth/action";

import {useLocation, useNavigate} from "react-router-dom";

function Login() {
    const location = useLocation();
    const navigate = useNavigate();
  const [email, setEmail] = useState("eve.holt@reqres.in");
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");

  const authStatus = useSelector((store)=>store.authReducer.auth);
  const dispatch = useDispatch();

  const submitHandler = (e) => {
      e.preventDefault()
      dispatch(signIn({email, contact, password}))
  };

  useEffect(()=>{
    if(location?.state && authStatus){
        navigate(location.state, {replace:true})
     }
  },[location?.state, navigate,authStatus])
console.log(authStatus)
  return (
    <div>
      <label htmlFor="">Email Address</label>
      <input
        type="text"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label htmlFor="">Contact Number</label>
      <input
        type="text"
        required
        value={contact}
        onChange={(e) => setContact(e.target.value)}
      />

      <label htmlFor="">Password</label>
      <input
        type="text"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="submit" onClick={submitHandler}>
        Submit
      </button>
    </div>
  );
}

export default Login;
