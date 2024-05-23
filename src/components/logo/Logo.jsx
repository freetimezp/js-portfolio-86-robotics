import React from 'react';
import './logo.css';

import { LiaStaylinked } from 'react-icons/lia';

const Logo = () => {
    return (
        <div className='logo__container'>
            <LiaStaylinked className='icon' />
            <h1 className='name'>
                Robotics
            </h1>
        </div>
    );
}

export default Logo;
