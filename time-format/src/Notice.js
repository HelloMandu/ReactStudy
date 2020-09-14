import React from 'react';
import { ButtonBase } from '@material-ui/core';

const Notice = ({ text, time, isConfirm, onConfirm }) => {
    return (
        <ButtonBase
            className={'Notice ' + (isConfirm ? 'Confirm' : '')}
            onClick={onConfirm}
        >
            <div className="Text">{text}</div>
            <div className="Time">{time}</div>
        </ButtonBase>
    );
};

export default Notice;
