import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Alert from "./Alert";

/**
 * Login: login form for users
 * state: formData
*
* props: loginFunction
*
* App -> RoutesList -> {..., Login} -> Alert
*
*/


const LOGIN_DEFAULT_DATA = { "username": "", "password": "" };

function Login({ loginFunction }) {
  const [formData, setFormData] = useState(LOGIN_DEFAULT_DATA);
  const navigate = useNavigate();

  console.log('Login component rendered');

  /** Updating the formData in state depending on user input */

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value,
    }));
  }
  console.log("Form Data in login:", formData);

  /** Calls parent function to update parent's state with form data */

  function handleSubmit(evt) {
    evt.preventDefault();
    loginFunction(formData);
    setFormData(LOGIN_DEFAULT_DATA);
    navigate('/');
  }


  return (
    <form onSubmit={handleSubmit}>

      <div>
        <label htmlFor="Login-username">Username</label>
        <input
          id="Login-username"
          name="username"
          className="form-control"
          placeholder="Username"
          onChange={handleChange}
          value={formData.username}
          aria-label="Username"
        />
      </div>

      <div>
        <label htmlFor="Login-password">Password</label>
        <input
          id="Login-password"
          name="password"
          className="form-control"
          placeholder="Password"
          onChange={handleChange}
          value={formData.password}
          aria-label="Password"
        />
      </div>

      <button>Login</button>
    </form>
  );
}

export default Login;
