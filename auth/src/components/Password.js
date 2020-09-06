import React, { useState, useMemo } from "react";

const Password = ({ value, onChange }) => {
  const { password, confirmPassword } = value;
  const [confirm, setConfirm] = useState(0);
  const [passStyle, setPassStyle] = useState({height: '0px'});
  useMemo(() => {
    if (confirmPassword !== "") {
      if (password !== confirmPassword) {
        setConfirm(1);
        setPassStyle({color: 'red', height: '20px'});
      } else {
        setConfirm(2);
        setPassStyle({color: '#007240', height: '20px'});
      }
    } else if (password === confirmPassword) {
      setConfirm(0);
      setPassStyle({height: '0px'});
    }
  }, [password, confirmPassword]);

  return (
    <div className="SignUpList">
      <input
        type="password"
        name={"password"}
        placeholder={"비밀번호"}
        value={password}
        onChange={onChange}
      ></input>
      <input
        type="password"
        name={"confirmPassword"}
        placeholder={"비밀번호 확인"}
        value={confirmPassword}
        onChange={onChange}
      ></input>
      <div className="confirmPassword" style={passStyle}>
        {confirm === 0 ? (
          ""
        ) : confirm === 1 ? (
          "비밀번호가 일치하지 않습니다"
        ) : (
          "비밀번호가 일치합니다"
        )}
      </div>
    </div>
  );
};

export default Password;
