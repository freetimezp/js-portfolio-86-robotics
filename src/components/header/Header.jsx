import React from 'react';
import './header.css';

import { Link } from 'react-scroll';

import { robot } from "../../assets";

import StarBackground from '../starbackground/StarBackground';
import Divider from '../divider/Divider';

const Header = () => {
    return (
        <header className='header'>
            <StarBackground>
                <div className="header__row">
                    <div className="column">
                        <div className="header__image">
                            <img src={robot} alt="robot" />
                        </div>
                    </div>
                    <div className="column">
                        <h3 className="tet__muted sub__title">
                            Artificial Intelligence and Robotics Engeneering
                        </h3>
                        <Divider />
                        <h1 className="title">
                            <span className="text__gradient">
                                Transforming Perceptions
                            </span> about the Potential of Robotics
                        </h1>
                        <p className="description text__muted">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
                            tempore dignissimos modi ratione numquam. Cumque labore provident
                            amet exercitationem maxime aperiam hic nemo dolorem nobis.
                        </p>
                        <div className="buttons__container">
                            <Link to="focus-base" className='btn btn__primary'>
                                Explore More
                            </Link>
                        </div>
                    </div>
                </div>
            </StarBackground>
        </header>
    );
}

export default Header;
