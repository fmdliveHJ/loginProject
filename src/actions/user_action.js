import axios from "axios";
import { LOGIN_USER, REGISTER_USER } from "./types";

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
