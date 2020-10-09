import React, { useState, useMemo, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import useInterval from '../hooks/UseInterval'
import {onModal} from '../modules/modal';
import { ButtonBase } from "@material-ui/core";

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
  const buttonRef = useRef(null);

  const dispatch = useDispatch();

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

  useEffect(() => {
    if (isSend && !timer && !confirm) {
      dispatch(onModal({title: '시간초과', description: '초과다잉', type: false}));
    }
  }, [timer, isSend, confirm, dispatch]);

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
    </div>
  );
};

export default Phone;
