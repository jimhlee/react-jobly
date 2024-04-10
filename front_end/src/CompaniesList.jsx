import React, { useState, useEffect } from "react";
import JoblyApi from "./helpers/api";
import CompanyCard from "./CompanyCard";

/**
 * CompaniesList: Displays a list of all the companies
 *
 * state: companies
 *
 * props: none
 *
 * App -> RoutesList -> CompaniesList -> CompanyCard
 *
 */
function CompaniesList() {
    // render a list of company cards
    // name, details, logo
    const [companies, setCompanies] = useState({
        data: null,
        isLoading: true
    });
    console.log('companies list state: companies', companies)

    //
    useEffect(function fetchCompaniesWhenMounted() {
        console.log('useffect companies list')
        async function fetchCompanies() {
            const companies = await JoblyApi.getAllCompanies();
            setCompanies({
                data: companies,
                isLoading: false
            });
        }
        fetchCompanies();
    }, []);

    if (companies.isLoading) return <i>Loading...</i>;

    return (
        <div className="companies-list">
            <ul>
                {companies.data.map((c) => (
                    <li key={c.handle}>
                        <CompanyCard  company={c} />
                    </li>
                ))}
            </ul>
        </div>
    );
}
/*
INSERT INTO companies (handle,
                       name,
                       num_employees,
                       description,
                       logo_url)
VALUES ('bauer-gallagher', 'Bauer-Gallagher', 862,
        'Difficult ready trip question produce produce someone.', NULL),
*/
export default CompaniesList;