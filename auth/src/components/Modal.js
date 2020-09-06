import React from "react";

const Modal = ({ modal }) => {
  const { title, description, type } = modal;
  return (
    <div className="Modal">
      <div className="Title">{title}</div>
      <div className="Description">{description}</div>
      <div className="Type">
        {type ? (
          <div className="Confirm">
            <div className="No">취소</div>
            <div className="Yes">확인</div>
          </div>
        ) : (
          <div className="Alert">확인</div>
        )}
      </div>
    </div>
  );
};

export default Modal;
