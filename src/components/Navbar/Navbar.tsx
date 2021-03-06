import React, { useState } from "react";
import { Link } from "react-router-dom";
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
                <i className={!clicked ? 'fas fa-bars' : 'fas fa-times'}></i>
            </div>
            <ul className={!clicked ? 'nav-menu' : 'nav-menu active'}>
                {MenuItems.map((item, index) => {
                    return <li key={index}>
                        <Link to={item.url}>
                            <div
                                className={item.cName}
                            >
                                {item.title}
                            </div>
                        </Link>
                    </li>
                })}
            </ul>
            <Link to='/signup'>
                <Button>Sign Up</Button>
            </Link>
        </nav>
    );
}