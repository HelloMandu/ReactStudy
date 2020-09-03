import React from 'react';
import cn from 'classnames';
import './CheckBoxItem.scss'

const CheckBoxItem = ({ checked, onToggle }) => {
    return (
        <div className="CheckBoxItem" onClick={onToggle}>
            <svg xmlns="http://www.w3.org/2000/svg" width="11.753" height="10.403" viewBox="0 0 11.753 10.403">
                <path id="패스_2" data-name="패스 2" d="M492.5-1967.066l2.788,4.264,6.177-8" transform="translate(-491.116 1972.204)" fill="none" stroke={checked ? "#072940" : "#fff"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
        </div>
    );
}

export default CheckBoxItem;