import { LOGIN_USER } from "../actions/types";
import { REGISTER_USER } from "../actions/types";
// 이전 state와 액션을 파라미터로 넣어줌
export default function (state = {}, action) {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, loginSuccess: action.payload };
      break;
    case REGISTER_USER:
      return { ...state, register: action.payload };
    default:
      break;
  }
}
