import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Modal from "../components/Modal";
import { offModal } from "../modules/modal";

const ModalContainers = () => {
    const {isOn, title, description, type} = useSelector(state => ({
        isOn: state.modal.isOn,
        title: state.modal.title,
        description: state.modal.description,
        type: state.modal.type
    }));
    const dispatch = useDispatch();
    return (
        <div>
            <Modal
                isOn={isOn}
                title={title}
                description={description}
                type={type}
                offModal={() => dispatch(offModal())}
            ></Modal>
        </div>
    );
};

export default ModalContainers;
