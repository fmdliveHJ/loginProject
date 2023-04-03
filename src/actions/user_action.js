import axios from 'axios';

export const LOGIN_USER = 'login_user';
export const REGISTER_USER = 'register_user';

//email, password 받은 파라미터를 dataSubmit에 넣어줌
export function loginUser(dataSubmit) {
  const request = axios.post(url, dataSubmit).then((res) => res.data);
  return {
    type: 'LOGIN_USER',
    payload: request,
  };
}

export function registerUser(dataSubmit) {
  const request = axios.post(url, dataSubmit).then((res) => {
    return res.data;
  });
  return {
    type: 'REGISTER_USER',
    payload: request,
  };
}
