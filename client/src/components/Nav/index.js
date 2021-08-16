import React from 'react';
import { Link } from 'react-router-dom';
import auth from '../../utils/auth';
import Login from '../Login/index'
import Signup from '../Signup/index';



export default function Nav() {


    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href="/homepage">Homepage</a>
                        </li>
                        <li className="nav-item"><Link to="/dashboard"><a className="nav-link">Dashboard</a></Link></li>
                        {/* {auth.isLoggedIn() ? (
                            <>
                                <li className="nav-item">
                                    <a className="nav-link" href="/dashboard">Dashboard</a>
                                </li>
                                <li className="nav-item">
                                    <button className="nav-link" onClick={auth.logout}>Logout</button>
                                </li>
                            </>

                        ) : (
                            <li className="nav-item">
                            <a className="nav-link" href="/login">Login</a>
                        </li>
                        )} * */}
                        <li className="nav-item">
                            <a className="nav-link" href="/login">Login</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/signup">Signup</a>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    )
}
