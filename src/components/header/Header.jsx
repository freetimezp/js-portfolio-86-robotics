import React, { useRef } from 'react';
import './header.css';

import { Link } from 'react-scroll';

import { robot } from "../../assets";

import StarBackground from '../starbackground/StarBackground';
import Divider from '../divider/Divider';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Header = () => {
    const container = useRef(null);

    useGSAP(() => {
        const timeline = gsap.timeline({ delay: 1 });

        timeline
            .fromTo(".header__image", { scale: .5, opacity: 0 }, { scale: 1, opacity: 1 })
            .from(".sub__title", { opacity: 0, y: -30 })
            .from(".divider", { opacity: 0, x: -30 })
            .from(".title", { opacity: 0, scale: 200 })
            .from(".description", { opacity: 0 })
            .from(".buttons__container", { x: -30, opacity: 0 })
    }, { scope: container });

    return (
        <header className='header' ref={container}>
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
