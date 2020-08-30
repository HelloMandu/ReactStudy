import React from 'react';
import './Hamburger.scss';

const Hamburger = ({onHamburger, onToggle}) => {
    return (
        <div className={onHamburger ? "on" : "off"} onClick={onToggle}>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
        </div>
    )
}

export default Hamburger;