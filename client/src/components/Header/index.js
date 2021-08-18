import React from 'react';
import './css/index.css';
import logo from '../Header/images/logo.png';
import Nav from '../Nav/index';

export default function Header() {
    return (
        <div className='header d-flex justify-content-between'>
            <img id='logo' src={logo} alt='logo' />
            <Nav />
        </div>
    );
}
