import React, { useState } from "react";

/**
 * Signup: A signup form for new users to register
 *
 * state: formData
 *
 * props: signUpFunction
 *
 * App -> RoutesList -> {..., SignUp} -> Alert
 *
 */

const SIGNUP_DEFAULT_DATA = { "username": "", "password": "", "firstName": "", "lastName": "", "email": "" };


function SignUp({ signUpFunction }) {

    const [formData, setFormData] = useState(SIGNUP_DEFAULT_DATA);

    function handleChange(evt) {
        const { name, value } = evt.target;
        setFormData(fData => ({
            ...fData,
            [name]: value,
        }));
    }

    console.log("Form Data:", formData);

    function handleSubmit(evt) {
        evt.preventDefault();
        signUpFunction(formData);
        setFormData(SIGNUP_DEFAULT_DATA);
    }

    return (
        <form onSubmit={handleSubmit}>

            <div>
                <label htmlFor="Signup-username">Username</label>
                <input
                    id="Signup-username"
                    name="username"
                    className="form-control"
                    placeholder="Username"
                    onChange={handleChange}
                    value={formData.username}
                    aria-label="Username"
                />
            </div>

            <br />

            <div>
                <label htmlFor="Signup-password">Password</label>
                <input
                    id="Signup-password"
                    name="password"
                    className="form-control"
                    placeholder="Password"
                    onChange={handleChange}
                    value={formData.password}
                    aria-label="Password"
                />
            </div>

            <br />

            <div>
                <label htmlFor="Signup-firstName">First Name</label>
                <input
                    id="Signup-firstName"
                    name="firstName"
                    className="form-control"
                    placeholder="First Name"
                    onChange={handleChange}
                    value={formData.firstName}
                    aria-label="First Name"
                />
            </div>

            <br />

            <div>
                <label htmlFor="Signup-lastName">Last Name</label>
                <input
                    id="Signup-lastName"
                    name="lastName"
                    className="form-control"
                    placeholder="Last Name"
                    onChange={handleChange}
                    value={formData.lastName}
                    aria-label="Last Name"
                />
            </div>

            <br />

            <div>
                <label htmlFor="Signup-email">Email</label>
                <input
                    id="Signup-email"
                    name="email"
                    className="form-control"
                    placeholder="Email"
                    onChange={handleChange}
                    value={formData.email}
                    aria-label="Email"
                />
            </div>

            <br />

            <button>Sign Up!</button>
        </form>
    );
}


export default SignUp;