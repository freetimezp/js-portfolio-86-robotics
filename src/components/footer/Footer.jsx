import React from 'react';
import './footer.css';

import Logo from '../logo/Logo';
import { footer } from '../../data';
import { Link } from 'react-scroll';

const Footer = () => {
    return (
        <footer id="footer">
            <div className="container">
                <div className="row">
                    <div className="column">
                        <Logo />

                        <form className="newsletter">
                            <h3>Get Weekly Update</h3>
                            <div className="control__container">
                                <input type="email" placeholder='Enter your email' className='control' />
                                <button className="btn" type='button'>Subscribe</button>
                            </div>
                        </form>
                    </div>

                    {footer.map((list, index) => (
                        <div className='column' key={index}>
                            <h3 className="group__name">{list.group}</h3>
                            <div className="routes__container">
                                {list.routes.map((route, i) => (
                                    <Link key={i} to={route.routeId || '#'} className='route__item'>
                                        {route.icon ? (
                                            <div className='icon__container'>
                                                {route.icon}
                                            </div>
                                        ) : ""}
                                        <p className="name">{route.name}</p>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <article className='copyright__container'>
                    <h3>&copy; 2024 Copyright. All rights reserved.</h3>
                    <p className="text__muted">by Freetime </p>
                </article>
            </div>
        </footer>
    );
}

export default Footer;
