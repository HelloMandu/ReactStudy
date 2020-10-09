import React from "react";
import useInput from "./hooks/UseInput";
import Store from "./components/Store";
import Email from "./components/Email";
import Password from "./components/Password";
import Phone from "./components/Phone";
import Address from "./components/Address";
import CheckBox from "./components/CheckBox";
import MainIcon from "./images/MainIcon.png";
import ModalContainer from './containers/ModalContainer';
import { ButtonBase } from "@material-ui/core";
import "./SCSS/auth.scss";


const App = () => {
  const [store, onChangeStore] = useInput({
    store: "",
  });
  const [email, onChangeEmail] = useInput({
    email: "",
  });
  const [password, onChangePassword] = useInput({
    password: "",
    confirmPassword: "",
  });
  const [phone, onChangePhone] = useInput({
    phoneNumber: "",
    confirmNumber: "",
  });
  const [address, onChangeAddress] = useInput({
    store: "",
    detail: "",
  });
  return (
    <div>
      <div className="SignUp">
        <div className="Title">
          <img src={MainIcon} alt="main" />
          <div>샌달 점주님 주문관리</div>
        </div>
        <div className="Introduce">정보를 입력해주세요</div>
        <Store value={store} onChange={onChangeStore}></Store>
        <Email value={email} onChange={onChangeEmail}></Email>
        <Password value={password} onChange={onChangePassword}></Password>
        <Phone value={phone} onChange={onChangePhone}></Phone>
        <Address value={address} onChange={onChangeAddress}></Address>
        <CheckBox></CheckBox>
        <ButtonBase className="Complete">가입완료</ButtonBase>
      </div>
      <ModalContainer></ModalContainer>
    </div>
  );
};

export default App;
