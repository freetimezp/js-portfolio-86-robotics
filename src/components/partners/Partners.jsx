import React from 'react';
import './partners.css';

import { partners } from '../../data';

const Partners = () => {
    return (
        <div id='partners'>
            <div className="logos__slide">
                {partners.map((partner, index) => (
                    <img src={partner.logo} key={index} alt={partner.name} />
                ))}
                {partners.map((partner, index) => (
                    <img src={partner.logo} key={index} alt={partner.name} />
                ))}
            </div>
        </div>
    );
}

export default Partners;
