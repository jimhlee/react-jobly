import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import './App.css';
import NavBar from './NavBar';
import RoutesList from './RoutesList';
import JoblyApi from "./helpers/api";
import Alert from "./Alert";
import userContext from "./helpers/userContext";

/**
 * App: Handles user auth and current user state
 *
 * state: currUser object like =>
 * {
 *  data:
      {username: "testusername",
      password: "password",
      firstName: "Bob",
      lastName: "Last",
      email: "email@email.com"},
 *  isLoading: true,
 *  errors: null
 * }
 *
 * currToken: unique string
 *
 * props: none
 *
 * App -> RoutesList
 *
 */

function App() {

  const [currUser, setCurrUser] = useState({});
  const [currToken, setCurrToken] = useState("");

  console.log("Our currUser:", currUser);
  console.log("Our currToken:", currToken);

  /** Function to login existing user, takes in username and password, make a call to the api and validates the formdata that
   * this is a real user. Sets current user and the current token */
  // TODO: // signUpUser editUser login

  /** Function to register new user, make a call to the api
   * and validate that the user can sign up,
   * response should contain the token for this new user and save this token. Sets current user and the current token */

  // this gets passed down to signup.jsx
  async function signup(formData) {
    console.log('signup function in app');
    try {
      const token = await JoblyApi.signUpUser(formData);
      setCurrToken(token);
      console.log('token', token);
    } catch (err) {
      setCurrUser({
        data: null,
        isLoading: false,
        errors: err
      });
    }
  }

  async function login(formData) {
    console.log('login function in app');
    try {
      const token = await JoblyApi.login(formData);
      setCurrToken(token);
      console.log('token', token);
    } catch (err) {
      setCurrUser({
        data: null,
        isLoading: false,
        errors: err
      });
    }
  }

  /** Function to logout current user, resets the currUser and currToken */
  function logout() {
    setCurrUser({
      data: null,
      isLoading: false,
      errors: null
    });
    setCurrToken("");
  }

  /** Function to edit the currUser, make a call to the api and accepts username, fname, lname, email, and token to validate
   *  and update the user and reset currUser */
  function edit() {
    setCurrUser();
  }

  /** UseEffect block to keep track of token changes and updates currUser accordingly */

  useEffect(function fetchUserFromToken() {
    async function fetchUser() {

      try {
        const { username } = jwtDecode(currToken);

        const userResult = await JoblyApi.getUser(username);
        setCurrUser({
          data: userResult,
          isLoading: false,
          errors: null
        });

      } catch (err) {
        setCurrUser({
          data: null,
          isLoading: false,
          errors: err
        });
      }
    }

    fetchUser();
  }, [currToken]);


  const authFunctions = {
    signup,
    edit,
    login
  };

  return (
    <div className="App">
      <userContext.Provider value={currUser}>
        <BrowserRouter>
          <NavBar logoutFunction={logout}/>
          <RoutesList functions={authFunctions} />
        </BrowserRouter>
      </ userContext.Provider >
    </div>
  );
};

export default App;
