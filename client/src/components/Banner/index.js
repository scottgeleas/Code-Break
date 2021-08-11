import React from 'react';
import './css/index.css';
import banner from '../Banner/images/banner.jpg';

export default function Banner() {
    return (
        <div>
            <img id='banner' src={banner} alt="banner" />
        </div>
    )
}

