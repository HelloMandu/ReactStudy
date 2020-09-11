import React from "react";
import CheckBoxItem from "./CheckBoxItem";

const CheckBoxList = ({ checkBoxList, onToggle }) => {
  return (
    <div className="CheckBoxList">
      {checkBoxList.map(({ id, checked, explain }) => (
        <div className="CheckBox" key={id}>
          <CheckBoxItem
            checked={checked}
            onToggle={() => onToggle(id)}
          ></CheckBoxItem>
          <div className="explain">{explain}</div>
        </div>
      ))}
    </div>
  );
};

export default CheckBoxList;