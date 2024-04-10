import React, { useState, useEffect } from "react";
import JoblyApi from "./helpers/api";
import CompanyCard from "./CompanyCard";
import SearchBox from "./searchBox";

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

    useEffect(function fetchCompaniesWhenMounted() {
        console.log('useffect companies list')
        async function fetchCompanies() {
            const companiesResult = await JoblyApi.getAllCompanies();
            setCompanies({
                data: companiesResult,
                isLoading: false
            });
        }
        fetchCompanies();
    }, []);

    // Format the search term (trim), feed the search term into the getAllCompanies, set the
    // new list of companies to the filtered companies list
    async function search(term){
        const formattedTerm = term.trim();
        const filteredCompanies = await JoblyApi.request(`companies`, formattedTerm);
        console.log("filtered companies", filteredCompanies)
            setCompanies({
                data: filteredCompanies.companies,
                isLoading: false
            })
    }

    if (companies.isLoading) return <i>Loading...</i>;

    return (
        <div className="companies-list">
            <SearchBox search={search}/>
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