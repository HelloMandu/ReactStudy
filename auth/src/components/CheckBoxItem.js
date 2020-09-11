import React from "react";
import { ButtonBase } from "@material-ui/core";

const CheckBoxItem = ({ checked, onToggle }) => {
  return (
    <ButtonBase
      className="CheckBoxItem"
      onClick={onToggle}
      style={{ backgroundColor: checked ? "#007240" : "" }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="11.753"
        height="10.403"
        viewBox="0 0 11.753 10.403"
      >
        <path
          id="패스_2"
          data-name="패스 2"
          d="M492.5-1967.066l2.788,4.264,6.177-8"
          transform="translate(-491.116 1972.204)"
          fill="none"
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1"
        />
      </svg>
    </ButtonBase>
  );
};

export default CheckBoxItem;
