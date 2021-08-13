import './css/index.css';
import { useState } from 'react';

import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../utils/mutations';

import Auth from '../../utils/auth';

function Login() {
    const [loginState, setLogInState] = useState({
        email: '',
        password: '',
    });

    const [loginUser] = useMutation(LOGIN_USER);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setLogInState({
            ...loginState,
            [name]: value,
        });
    }

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            const { data } = await loginUser({
                variables: {
                    ...loginState,
                }
            });

            Auth.login(data.loginUser.token);
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div className="loginContainer">
            <form onSubmit={handleFormSubmit}>
                <div className="mb-3">
                    <label htmlFor="loginEmail" className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="loginEmail"
                        name="email"
                        placeholder="somebody@email.com"
                        required="required"
                        value={loginState.email}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="loginPassword" className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="loginPassword"
                        name="password"
                        placeholder="Never tell anyone your password"
                        required="required"
                        value={loginState.password}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
                <a className="btn btn-primary" href="/signup">Signup</a>
            </form>
        </div>
    );
}

export default Login;
