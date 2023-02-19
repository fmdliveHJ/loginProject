import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../../../actions/user_action";

const RegisterPage = (props) => {
  const disPatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onEmailHandler = (e) => {
    setEmail(e.target.value);
  };
  const onNameHandler = (e) => {
    setPassword(e.target.value);
  };
  const onPasswordHandler = (e) => {
    setPassword(e.target.value);
  };
  const onConfirmPasswordHandler = (e) => {
    setPassword(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      console.log("다름");
    }
    let body = {
      email: email,
      password: password,
      name: name,
    };

    disPatch(registerUser(body)).then((res) => {
      if (res.payload.loginSuccess) {
        props.history.push("/login");
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
        <label htmlFor="name">name</label>
        <input type="text" value={name} onChange={onNameHandler} />
        <label htmlFor="password">paswsord</label>
        <input type="password" value={password} onChange={onPasswordHandler} />
        <label htmlFor="confirm">confirm paswsord</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={onConfirmPasswordHandler}
        />
        <button type="submit">회원가입</button>
      </form>
    </div>
  );
};

export default RegisterPage;
