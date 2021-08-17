import React from 'react';
import './css/index.css';
import auth from '../../utils/auth';
import mini from '../Footer/images/mini.png'


export default function Footer() {

    return (

        <div className="footer-container">
            <ul className="foot">
                
                <li className="nav-item">
                    <a className="nav-link" href="/">Homepage</a>
                </li>

                {auth.isLoggedIn() ? (

                    <>
                        <li className="nav-item">
                            <a className="nav-link" href="/dashboard">Dashboard</a>
                        </li>
                        <li className="nav-item">
                            <a onClick={() => auth.logout()} className="nav-link" href="/">Logout</a>
                        </li>

                    </>

                )

                    : (
                        <>

                            <li className="nav-item">
                                <a className="nav-link" href="/login">Login</a>
                            </li>
                            {/* <li className="nav-item">
                                            <a className="nav-link" href="/signup">Signup</a>
                                        </li> */}
                        </>

                    )}

            </ul>

            <img id='mini' src={mini} alt="logo" />
        </div>
        
    )
}
