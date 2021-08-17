import React from 'react';
import './css/index.css';
import logo from '../Header/images/logo.png';


export default function Header() {
    return (
        <div className='container'>
             <img id='logo' src={logo} alt="logo" />
        </div>
    );
}
