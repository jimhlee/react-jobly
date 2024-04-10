import React, { useState, useEffect } from "react";

/**
 * SearchBox: A search box that filters companies to those matching the search
 *
 * state: search term
 *
 * props: none
 *
 * App -> RoutesList -> CompaniesList -> CompanyCard
 *
 */
function SearchBox({search}) {

    const [term, setTerm] = useState("");

    function handleChange(evt) {
      setTerm(evt.target.value);
    }

    function handleSubmit(evt) {
      evt.preventDefault();
      search(term);
      setTerm("");
    }

    return (
      <form onSubmit={handleSubmit}>
        <input value={term} onChange={handleChange} />
        <button>Search!</button>
      </form>
    );
  }
  // end

  export default SearchBox;