import React, { useState, useMemo, useEffect, useRef } from "react";
import Modal from "./Modal";
import { ButtonBase } from "@material-ui/core";

function useInterval(callback, delay) {
  const savedCallback = useRef();
  useEffect(() => {
    savedCallback.current = callback;
  });
  useEffect(() => {
    if (delay !== 0) {
      const interval = setInterval(() => savedCallback.current(), delay);
      return () => clearInterval(interval);
    }
  }, [delay]);
}

function getTime(timer) {
  return (
    <div>
      {parseInt(timer / (1000 * 60))}:{parseInt((timer % (1000 * 60)) / 10000)}
      {parseInt(((timer % (1000 * 60)) % 10000) / 1000)}
    </div>
  );
}

const Phone = ({ value, onChange }) => {
  const { phoneNumber, confirmNumber } = value;
  const [canSend, setCanSend] = useState(false);
  const [isSend, setIsSend] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const [timer, setTimer] = useState(0);
  const [onModal, setOnModal] = useState(false);
  const buttonRef = useRef(null);

  useMemo(() => {
    const phoneNumberRegExp = /^\d{3}-\d{3,4}-\d{4}$/;
    if (phoneNumber.match(phoneNumberRegExp)) {
       setCanSend(true);
    } else {
      setCanSend(false);
    }
  }, [phoneNumber]);

  useEffect(()=>{
    if(canSend){
      buttonRef.current.focus();
    }
  }, [canSend])

  useMemo(() => {
    if (isSend && !timer && !confirm) {
      setOnModal(true);
    }
  }, [timer, isSend, confirm]);

  useInterval(
    () => {
      setTimer(timer - 1000);
    },
    !confirm && isSend && timer ? 1000 : 0
  );

  const sendConfirm = () => {
    if (canSend) {
      setTimer(2000);
      setIsSend(true);
    }
  };

  const confirmToggle = () => {
    const tcConfirm = "1234";
    if (timer && tcConfirm === confirmNumber) {
      setConfirm(true);
      setTimer(0);
    }
  };

  return (
    <div className="SignUpList">
      <div className="phoneCheck">
        <input
          type="tel"
          name={"phoneNumber"}
          placeholder={"휴대폰 번호 인증"}
          value={phoneNumber}
          onChange={onChange}
        ></input>
        <ButtonBase
          className={canSend && !confirm ? "send" : ""}
          onClick={sendConfirm}
          ref={buttonRef}
        >
          {confirm ? "인증완료" : "인증번호 발송"}
        </ButtonBase>
      </div>
      <div className={"phoneCheck " + (confirm ? "Finish" : "")}>
        <input
          type="text"
          name={"confirmNumber"}
          placeholder={""}
          value={confirmNumber}
          onChange={onChange}
        ></input>
        <ButtonBase className={isSend ? "Confirm" : ""} onClick={confirmToggle}>
          인증하기
        </ButtonBase>
        {timer !== 0 && <div className="Timer">{getTime(timer)}</div>}
      </div>
      <Modal
        title={"인증시간만료"}
        description={"다시해라"}
        type={false}
        onModal={onModal}
        setOnModal={setOnModal}
      ></Modal>

    </div>
  );
};

export default Phone;
