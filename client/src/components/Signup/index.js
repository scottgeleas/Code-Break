
import { useState } from 'react';
import './css/index.css';

import { useMutation } from '@apollo/client';
import { CREATE_USER } from '../../utils/mutations';

import Auth from '../../utils/auth';

function Signup() {
    const [signupState, setSignupState] = useState({
        username: '',
        email: '',
        password: '',
    });

    const [createUser] = useMutation(CREATE_USER);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setSignupState({
            ...signupState,
            [name]: value,
        });
    }

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            const { data } = await createUser({
                variables: {
                    ...signupState,
                },
            });

            Auth.login(data.createUser.token);
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div className="signupContainer">
            <form onSubmit={handleFormSubmit}>
                <div className="mb-3">
                    <label htmlFor="signupUsername" className="form-label">Username</label>
                    <input
                        type="text"
                        className="form-control"
                        id="signupUsername"
                        name="username"
                        placeholder="programmer123"
                        required="required"
                        value={signupState.username}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="signupEmail" className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="signupEmail"
                        name="email"
                        placeholder="somebody@email.com"
                        required="required"
                        value={signupState.email}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="signupPassword" className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="signupPassword"
                        name="password"
                        placeholder="Never tell anyone your password"
                        required="required"
                        value={signupState.password}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                <a className="btn btn-primary" href="/login">Login</a>
            </form>
        </div>
    );
}

export default Signup;
