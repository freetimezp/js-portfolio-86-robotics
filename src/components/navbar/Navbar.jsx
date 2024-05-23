import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './navbar.css';

import { FaTimes } from 'react-icons/fa';
import { RiMenu3Fill } from 'react-icons/ri';

import Logo from "../logo/Logo";

import { menus } from "../../data";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav className='navbar'>
            <Logo />

            <div className={`column hamburger ${open && 'visible'}`}>
                <div className="menu__group">
                    <div
                        className="icon__container cancel__btn"
                        onClick={() => setOpen(!open)}
                    >
                        <FaTimes />
                    </div>

                    {menus.map((menu, index) => (
                        <Link
                            to={menu.routeId}
                            key={index}
                            className='item'
                            activeClass='text__gradient'
                            smooth={true}
                            spy={true}
                            offset={-70}
                            onClick={() => setOpen(false)}
                        >
                            {menu.name}
                        </Link>
                    ))}
                </div>
            </div>
            <div className="column">
                <Link to="contact" className='btn btn__primary contact__btn'>
                    Talk to Us
                </Link>
                <div className="icon__container menu__btn" onClick={() => setOpen(!open)}>
                    <RiMenu3Fill />
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
