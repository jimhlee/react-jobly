import React from "react";

import {
  Routes,
  Route,
  Navigate
} from 'react-router-dom';

import HomePage from "./HomePage";
import CompaniesList from "./CompaniesList";
import CompanyDetail from "./CompanyDetail";
import JobsList from "./JobsList";
import Login from "./Login"
import Signup from "./Signup"
import Profile from "./Profile"

/**
 * RoutesList: Holds all of our endpoints
 *
 * state: none
 *
 * props: none
 *
 * App -> RoutesList -> {JobList, CompanyDetail, CompanyList, HomePage}
 *
 */

function RoutesList({functions}) {
  // unpacking the functions
  const {signup, edit, login} = functions
  // passing them down as propsm where needed

  return (
    <Routes>
      <Route
        path="/"
        element={<HomePage />}
      />

      <Route
        path="/companies"
        element={<CompaniesList />}
      />

      <Route
        path="/companies/:handle"
        element={<CompanyDetail />}
      />

      <Route
        path="/jobs"
        element={<JobsList />}
      />

      <Route
        path="/login"
        element={<Login loginFunction={login}/>}
      />

      <Route
        path="/signup"
        element={<Signup signUpFunction={signup}/>}
      />

      <Route
        path="/profile"
        element={<Profile edit={edit}/>}
      />


      <Route
        path="/*"
        element={<Navigate to="/" />}
      />
    </Routes>
  );
}

export default RoutesList;