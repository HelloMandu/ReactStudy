import React from "react";

const Store = ({ value, onChange }) => {
  return (
    <div className="SignUpList">
      <input
        type="text"
        name="store"
        placeholder="가맹점명"
        value={value.store}
        onChange={onChange}
      ></input>
    </div>
  );
};

export default Store;
