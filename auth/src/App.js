import React, { useState } from "react";
import useInput from "./modules/UseInput";
import Store from "./components/Store";
import Email from "./components/Email";
import Password from "./components/Password";
import Phone from "./components/Phone";
import Address from "./components/Address";
import CheckBox from "./components/CheckBox";
import Modal from "./components/Modal";
import MainIcon from "./images/MainIcon.png";
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
  const [modal, setModal] = useState({
    title: "Confirm창 타이틀",
    description: "confirm 창 내용",
    type: true,
    isOn: false,
  });
  return (
    <div>
      <div className="SignUp">
        <div className="Title">
          <img src={MainIcon} />
          <div>샌달 점주님 주문관리</div>
        </div>
        <div className="Introduce">정보를 입력해주세요</div>
        <Store value={store} onChange={onChangeStore}></Store>
        <Email value={email} onChange={onChangeEmail}></Email>
        <Password value={password} onChange={onChangePassword}></Password>
        <Phone value={phone} modal={modal} onChange={onChangePhone}></Phone>
        <Address value={address} onChange={onChangeAddress}></Address>
        <CheckBox></CheckBox>
        <button className="Complete">가입완료</button>
      </div>
      <div className={modal.isOn ? "" : "Shade"}>
        {/* <Modal modal={modal}></Modal> */}
      </div>
    </div>
  );
};

export default App;
