import React, { useState, useEffect, useMemo } from "react";

const Email = ({ value, onChange }) => {
  const [isOn, setIsOn] = useState(false);
  useMemo(()=>{
  const emailRegExp = /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    if(value.email.match(emailRegExp)){
      setIsOn(true);
    }
    else{
      setIsOn(false);
    }
  }, [value.email])

  return (
    <div className="SignUpList">
      <input
        type="email"
        name="email"
        placeholder="이메일"
        value={value.email}
        onChange={onChange}
      ></input>
      <button className={isOn ? "On" : ""}>중복검사</button>
    </div>
  );
};

export default Email;
