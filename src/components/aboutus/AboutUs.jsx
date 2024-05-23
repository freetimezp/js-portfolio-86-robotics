import React from 'react';
import './aboutUs.css';

import { about } from '../../data';
import Divider from '../divider/Divider';

const AboutUs = () => {
    return (
        <section id="about-us">
            <div className="container">
                <Divider />
                <h1 className="title">
                    <span className="text__gradient">About </span>Us
                </h1>
                <h3 className="sub__title">
                    Pioneering Tomorrow Through AI and Robotics Innovation
                </h3>
                <div className="about__cards">
                    {about.map((list, index) => (
                        <div className="about__card" key={index}>
                            <div className="icon__container">
                                {list.icon}
                            </div>
                            <h3 className="name">{list.title}</h3>
                            <p className="text__muted description">
                                {list.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default AboutUs;
