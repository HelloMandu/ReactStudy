import React, { useState, useMemo, useEffect, useRef } from "react";

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

const Phone = ({ value, onChange }) => {
  const { phoneNumber, confirmNumber } = value;
  const [canSend, setCanSend] = useState(false);
  const [isSend, setIsSend] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const [timer, setTimer] = useState(0);

  useMemo(() => {
    const phoneNumberRegExp = /^\d{3}-\d{3,4}-\d{4}$/;
    if (phoneNumber.match(phoneNumberRegExp)) {
      setCanSend(true);
    } else {
      setCanSend(false);
    }
  }, [phoneNumber]);

  useInterval(
    () => {
      setTimer(timer - 1000);
    },
    !confirm && isSend && timer ? 1000 : 0
  );

  const sendConfirm = () => {
    if(canSend){
      setTimer(1000 * 60 * 3);
      setIsSend(true);
    }
  };

  const confirmToggle = () =>{
    const tcConfirm = "1234";
    if(timer){
      if(tcConfirm === confirmNumber){
        setConfirm(true);
      }
    }
  }

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
        <button className={canSend && !confirm? "send" : ""} onClick={sendConfirm}>
          {confirm ? "인증완료" : "인증번호 발송"}
        </button>
      </div>
        <div className={"phoneCheck " + (confirm ? "Finish" : "")}>
          <input
            type="text"
            name={"confirmNumber"}
            placeholder={""}
            value={confirmNumber}
            onChange={onChange}
          ></input>
          <button className={isSend ? "Confirm" : ""} onClick={confirmToggle}>인증하기</button>
          {timer != 0 && (
            <div className="Timer">
              {parseInt(timer / (1000 * 60))}:
              {parseInt((timer % (1000 * 60)) / 10000)}
              {parseInt(((timer % (1000 * 60)) % 10000) / 1000)}
            </div>
          )}
        </div>
      
    </div>
  );
};

export default Phone;
