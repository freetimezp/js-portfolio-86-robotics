import React from 'react';
import './contact.css';

import { contactInfo } from '../../data';
import Divider from '../divider/Divider';

const Contact = () => {
    return (
        <section id="contact">
            <div className="container full__height">
                <Divider />
                <h1 className="title">
                    <span className="text__gradient">Contact Me</span>
                </h1>
                <form className="contact__form">
                    <div className="column">
                        <h3 className="sub__title color__primary">Contact Info</h3>
                        <p>Fill the form to get in touch with us</p>
                        <div className="contact__info__container">
                            {contactInfo.map((list, index) => (
                                <div key={index} className='contact__info'>
                                    <div className="icon__container">{list.icon}</div>
                                    <p>{list.value}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="column">
                        <div className="form__top">
                            <h3 className="sub__title color__primary">Keep in Touch</h3>
                            <p>We create beautiful simple design and cute with love. It's as simple as that!</p>
                        </div>
                        <div className="form__middle">
                            <div className="row">
                                <input type="text" placeholder='First name' name="firstname" className='control' />
                                <input type="text" placeholder='Last name' name="lastname" className='control' />
                            </div>
                            <div className="row">
                                <input type="email" placeholder='Email address' name="email" className='control' />
                                <input type="text" placeholder='Phone' name="phone" className='control' />
                            </div>
                            <textarea
                                name="message"
                                cols={30}
                                rows={10}
                                placeholder='Message'
                                className='control'>
                            </textarea>
                        </div>
                        <div className="form__bottom">
                            <button className="btn btn__primary">Send Message</button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Contact;
