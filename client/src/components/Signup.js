import React from 'react';

export default function Signup() {
    return (
        <div>
            <form>
                <div class='mb-3'>
                    <label for='signupUsername' class='form-label'>
                        Username
                    </label>
                    <input
                        type='text'
                        class='form-control'
                        id='signupUsername'
                        placeholder='username'
                    />
                </div>
                <div class='mb-3'>
                    <label for='signupEmail' class='form-label'>
                        Email address
                    </label>
                    <input
                        type='email'
                        class='form-control'
                        id='signupEmail'
                        placeholder='somebody@email.com'
                    />
                </div>
                <div class='mb-3'>
                    <label for='signupPassword' class='form-label'>
                        Password
                    </label>
                    <input
                        type='password'
                        class='form-control'
                        id='signupPassword'
                        placeholder='password'
                    />
                </div>
                <button type='submit' class='btn btn-primary'>
                    Submit
                </button>
                <button type='submit' class='btn btn-primary'>
                    Login
                </button>
            </form>
        </div>
    );
}