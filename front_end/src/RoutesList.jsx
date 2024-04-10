import React from "react";

import {
    Routes,
    Route,
    Navigate,
    Link
  } from 'react-router-dom';

  import HomePage from "./HomePage"
  import CompaniesList from "./CompaniesList"
  import CompanyDetail from "./CompanyDetail"
  import JobsList from "./JobsList"

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

function RoutesList() {
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
        path="/*"
        element={<Navigate to="/" />}
      />
    </Routes>
  );
}

export default RoutesList;