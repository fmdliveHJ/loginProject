import axios from "axios";

export const LOGIN_USER = "login_user";
export const REGISTER_USER = "register_user";

//email, password 받은 파라미터를 dataTsubmit에 넣어줌
export function loginUser(dataTsubmit) {
  const request = axios.post(url, dataTsubmit).then((res) => res.data);
  return {
    type: "LOGIN_USER",
    payload: request,
  };
}

export function registerUser(dataTsubmit) {
  const request = axios.post(url, dataTsubmit).then((res) => {
    res.data;
  });
  return {
    type: "REGISTER_USER",
    payload: request,
  };
}
