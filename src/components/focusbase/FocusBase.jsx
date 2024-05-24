import React from 'react';
import './focusBase.css';

import { focusBase } from '../../data';
import Divider from '../divider/Divider';

import robot2Img from "../../assets/robot-2.jpg";

const FocusBase = () => {
    return (
        <section id="focus-base" className='focus__base blur-effect'>
            <div className="container">
                <Divider />
                <h1 className="title">
                    <span className="text__gradient">Focus</span> Base
                </h1>

                <div className="row">
                    <div className="column bases__container">
                        {focusBase.map((base, index) => (
                            <div key={index} className='base'>
                                <div className="icon__container">
                                    {base.icon}
                                </div>
                                <div className="details">
                                    <h3 className="name">{base.name}</h3>
                                    <p className="text__muted">{base.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="column image__container primary-effect">
                        <img src={robot2Img} alt="robot" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FocusBase;
