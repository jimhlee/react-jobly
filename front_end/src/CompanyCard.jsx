import React from "react";

/**
 * CompanyCard: Displays a single company
 *
 * state: none
 *
 * props: company
 *
 * App -> RoutesList -> CompanyList -> CompanyCard
 *
 */
function CompanyCard({ company }) {
    return (
        <div>
            <h5>{company.name}</h5>
            <p>{company.description}</p>
            {/* FIXME: logo not loading */}
            <img src={company.logo_url} alt={`Logo for ${company.name}`} />
        </div>
        );
}

export default CompanyCard;