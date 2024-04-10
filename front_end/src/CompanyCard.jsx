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
    //console.log(company);
    return (
        <div>
            <h5>{company.name}</h5>
            <p>{company.description}</p>
            {company.logoUrl && <img src={company.logoUrl} alt={`Logo for ${company.name}`} />}
        </div>
        );
}

export default CompanyCard;