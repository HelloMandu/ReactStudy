import React from 'react';
import './RadioBoxItem.css'

const RadioBoxItem = ({ radioBoxItem, onToggle }) => {
    const { id, checked } = radioBoxItem;
    return (
        <div className="RadioBoxItem" onClick={() => onToggle(id)}>
            {checked && <div className="radioClicked"/>}
        </div>
    );
}

export default RadioBoxItem;