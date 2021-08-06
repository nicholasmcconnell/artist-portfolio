import React, { Component, useState } from "react";
import { Button } from '../Button/Button';
import { MenuItems } from "./MenuItems";
import './Navbar.css';

export const Navbar = () => {

    const [clicked, setClicked] = useState(false)

    const handleClick = () => {
        !clicked ? setClicked(true) : setClicked(false);
    }

    return (
        <nav className="NavbarItems">
            <h1 className="navbar-logo">
                React
                <i className="fab fa-react"></i>
            </h1>
            <div className="menu-icon" onClick={handleClick}>
                <i className={!clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
            <ul className={!clicked ? 'nav-menu active' : 'nav-menu'}>
                {MenuItems.map((item, index) => {
                    return <li key={index}>
                        <a
                            className={item.cName}
                            href={item.url}
                        >
                            {item.title}
                        </a>
                    </li>
                })}
            </ul>
            <Button>Sign Up</Button>
        </nav>
    );

}

// export default Navbar;
