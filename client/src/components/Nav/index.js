import React from 'react';
import './css/index.css';
import auth from '../../utils/auth';

export default function Nav() {

    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
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
                                        <li className="nav-item">
                                            <a className="nav-link" href="/signup">Signup</a>
                                        </li>

                                    
                                </>

                            )}


                    </ul>
                </div>
            </div>
        </nav>
    )
}

