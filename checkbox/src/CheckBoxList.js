import React, { useState, useCallback } from 'react';
import CheckBoxItem from './CheckBoxItem';

const CheckBoxList = ({checkBoxList, onToggle}) => {
    return (
        <div className="checkBoxList">
            {checkBoxList.map(checkBoxItem => (
                <CheckBoxItem checkBoxItem={checkBoxItem} key={checkBoxItem.id} onToggle={onToggle} />
            ))}
        </div>
    );
}

export default CheckBoxList;