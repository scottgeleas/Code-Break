import React from 'react';
import './css/index.css';
import mini from '../Footer/images/mini.png';

export default function Footer() {
    return (
        <>
            <div className='footer-container'>
                <a className='nav-link' href='/'>
                    <img id='mini' src={mini} alt='logo' />
                </a>
            </div>
        </>
    );
}
