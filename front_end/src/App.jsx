import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import './App.css';
import NavBar from './NavBar';
import RoutesList from './RoutesList';


/**
 * App
 *
 * state: none
 *
 * props: none
 *
 * App -> RoutesList
 *
 */

function App() {

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
