import React, { useReducer, useCallback, useEffect } from "react";
import {useHistory} from 'react-router-dom';
import { postLogin, postLogout } from "../api/auth";
import Button from "../components/Button";

const reducer = (state, action) => {
  return {
    ...state,
    [action.name]: action.value,
  };
};

const useInput = (initialForm) => {
  const [state, dispatch] = useReducer(reducer, initialForm);
  const onChange = useCallback((e) => {
    dispatch(e.target);
  }, []);
  return [state, onChange];
};

const LoginPage = () => {
  const [user, onChangeUser] = useInput({
    email: "",
    password: "",
  });
  const history = useHistory();

  const onClickLogin = useCallback(async () => {
    const { email, password } = user;
    const result = await postLogin(email, password);
    console.log(result);
    const TOKEN = result.data.access_token;
    if (TOKEN) {
      localStorage.setItem("access_token", TOKEN);
      history.push('/login_complete');
    }
  }, [user]);

  return (
    <div className="Page">
      <input
        type="email"
        name="email"
        value={user.email}
        placeholder="이메일"
        onChange={onChangeUser}
      ></input>
      <input
        type="password"
        name="password"
        value={user.password}
        placeholder="비밀번호"
        onChange={onChangeUser}
      ></input>
      <Button onClick={onClickLogin}>로그인</Button>
    </div>
  );
};

export default LoginPage;
