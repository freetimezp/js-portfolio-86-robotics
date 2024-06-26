import React from 'react';
import './whychooseus.css';

import { whyChooseUs } from '../../data';
import Divider from '../divider/Divider';

const WhyChooseUs = () => {
    return (
        <section id="why-choose-us">
            <div className="container">
                <Divider />
                <h1 className="title">
                    Why <span className="text__gradient">Choose Us</span>
                </h1>

                <div className="why__choose__us__container">
                    {whyChooseUs.map((list, index) => (
                        <div key={index} className='choose__us__card'>
                            <div className="icon__container">{list.icon}</div>
                            <h3 className="name">{list.name}</h3>
                            <p className="text__muted">{list.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default WhyChooseUs;
