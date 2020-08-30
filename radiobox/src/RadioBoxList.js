import React, { useState, useCallback } from 'react';
import RadioBoxItem from './RadioBoxItem';

const RadioBoxList = () => {
    const [radioBoxList, setRadioBoxList] = useState([
        {
            id: 1,
            checked: false,
        },
        {
            id: 2,
            checked: true,
        },
        {
            id: 3,
            checked: false,
        }
    ]);
    const onToggle = useCallback(id => {
        const newRadioBoxList = radioBoxList.map(radioBox => radioBox.id === id ? { ...radioBox, checked: true } : {...radioBox, checked: false});
        setRadioBoxList(newRadioBoxList);
    }, [radioBoxList]);
    return (
        <div className="checkBoxList">
            {radioBoxList.map(radioBoxItem => (
                <RadioBoxItem radioBoxItem={radioBoxItem} key={radioBoxItem.id} onToggle={onToggle} />
            ))}
        </div>
    );
}

export default RadioBoxList;