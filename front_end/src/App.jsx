import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import './App.css';
import NavBar from './NavBar';
import RoutesList from './RoutesList';


/**
 * App: Handles user auth and current user state
 *
 * state: currUser object like =>
 * {
 *  userInfo:
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

  /** Function to login existing user, takes in username and password, make a call to the api and validates the formdata that
   * this is a real user. Sets current user and the current token */
  function login(){
    setCurrUser();
    setCurrToken();
  }

  /** Function to register new user, make a call to the api and validate that the user can sign up,
   * response should contain the token for this new user and save this token. Sets current user and the current token */
  function signup(){
    setCurrUser(formData);
    setCurrToken();
  }

  /** Function to logout current user, resets the currUser and currToken */
  function logout(){
    setCurrUser({});
    setCurrToken("");
  }

  /** Function to edit the currUser, make a call to the api and accepts username, fname, lname, email, and token to validate
   *  and update the user and reset currUser */
  function edit(){
    setCurrUser();
  }

  /** UseEffect block to keep track of token changes and updates currUser accordingly */

  useEffect(function fetchCompanyWhenMounted() {
    console.log('useffect company object', handle);
    async function fetchCompany() {

        try {
            const companyResult = await JoblyApi.getCompany(handle);
            setCompany({
                data: companyResult,
                isLoading: false,
                errors: null
            });

        } catch (err) {
            setCompany({
                data: null,
                isLoading: false,
                errors: err
            });
        }
    }

    fetchCompany();
}, []);

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
          <RoutesList />
      </BrowserRouter>
    </div>
  );
};

export default App;
