import React from "react";

const Address = ({ value, onChange }) => {
  const { store, detail } = value;
  return (
    <div className="SignUpList">
      <input
        type="text"
        name={"store"}
        placeholder={"가맹점 주소"}
        value={store}
        onChange={onChange}
      ></input>
      <button>주소찾기</button>
      <input
        type="text"
        name={"detail"}
        placeholder={"상세주소를 입력하세요"}
        value={detail}
        onChange={onChange}
      ></input>
    </div>
  );
};

export default Address;
