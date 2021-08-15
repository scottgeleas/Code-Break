import React from 'react';
import './css/index.css';
import logo from '../Header/images/logo.jpg';


export default function Header() {
    return (
        <div className='container'>
             <img id='logo' src={logo} alt="logo" />
            {/* <h1 className='code'>Code {`<br>`}</h1> */}
        </div>
    );
}
