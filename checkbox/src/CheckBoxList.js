import React, { useState, useCallback } from 'react';
import CheckBoxItem from './CheckBoxItem';

const CheckBoxList = ({checkBoxList, onToggle}) => {
    return (
        <div className="checkBoxList">
            {checkBoxList.map(({ id, checked }) => (
                <CheckBoxItem  key={id} checked={checked} onToggle={() => onToggle(id)} />
            ))}
        </div>
    );
}

export default CheckBoxList;