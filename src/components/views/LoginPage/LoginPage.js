import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../../action/user_action";
const LoginPage = () => {
  const disPatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onEmailHandler = (e) => {
    setEmail(e.target.value);
  };
  const onPasswordHandler = (e) => {
    setPassword(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();

    let body = {
      email: email,
      password: password,
    };

    disPatch(loginUser(body)).then((res) => {
      if (res.payload.loginSuccess) {
        props.history.push("/");
      }
    });
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <form
        action=""
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={onSubmit}
      >
        <label htmlFor="id">email</label>
        <input type="text" value={email} onChange={onEmailHandler} />
        <label htmlFor="password">paswsord</label>
        <input type="password" value={password} onChange={onPasswordHandler} />
        <button>login</button>
      </form>
    </div>
  );
};

export default LoginPage;
