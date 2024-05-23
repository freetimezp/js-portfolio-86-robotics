import React from 'react';
import './starBackground.css';

const StarBackground = ({ children }) => {
    return (
        <div className='star__background '>
            <div className="star star1"></div>
            <div className="star star2"></div>
            <div className="star star3"></div>
            <div className="star star4"></div>
            <div className="star star5"></div>
            <div className="star star6"></div>
            <div className="star star7"></div>
            <div className="star star8"></div>
            <div className="container full__height">
                {children}
            </div>
        </div>
    );
}

export default StarBackground;
