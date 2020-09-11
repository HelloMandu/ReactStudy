import React from "react";
import { Backdrop, ButtonBase } from "@material-ui/core";

const Modal = ({ title, description, type, onModal, setOnModal }) => {
  return (
    <div>
      {onModal && <div className="Modal">
        <div className="Title">{title}</div>
        <div className="Description">{description}</div>
        <div className="Type">
          {type ? (
            <div className="Confirm">
              <ButtonBase className="No">취소</ButtonBase>
              <ButtonBase className="Yes">확인</ButtonBase>
            </div>
          ) : (
            <ButtonBase className="Alert" onClick={() => setOnModal(!onModal)}>
              확인
            </ButtonBase>
          )}
        </div>
      </div>}
      <Backdrop
        open={onModal}
        onClick={() => setOnModal(!onModal)}
        style={{ zIndex: 1500 }}
      />
    </div>
  );
};

export default Modal;
