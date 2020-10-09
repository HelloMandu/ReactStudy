import React from "react";
import { Backdrop, ButtonBase } from "@material-ui/core";
import '../SCSS/modal.scss'

const Modal = ({ isOn, title, description, type, offModal }) => {
  return (
    <div>
      {isOn && <div className="Modal">
        <div className="Title">{title}</div>
        <div className="Description">{description}</div>
        <div className="Type">
          {type ? (
            <div className="Confirm">
              <ButtonBase className="No">취소</ButtonBase>
              <ButtonBase className="Yes" onClick={() => offModal()}>확인</ButtonBase>
            </div>
          ) : (
            <ButtonBase className="Alert" onClick={() => offModal()}>
              확인
            </ButtonBase>
          )}
        </div>
      </div>}
      <Backdrop
        open={isOn}
        onClick={() => offModal()}
        style={{ zIndex: 1500 }}
      />
    </div>
  );
};

export default Modal;
