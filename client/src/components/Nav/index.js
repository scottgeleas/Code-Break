import React from 'react';
import './css/index.css';

export default function Nav() {
    return (
        <div>
            <ul class="nav">
                <li class="nav-item">
                    <a class="nav-link" href='/'>Homepage</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href='/dashboard'>Dashboard</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href='/login'>Login</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href='/signup'>Sign up</a>
                </li>
            </ul>
            {/* <a href=''>Homepage</a>
            <a href=''>Dashboard</a> */}
        </div>
    );
}
