import React, { useState, useEffect } from "react";
import JoblyApi from "./helpers/api";
import CompanyCard from "./CompanyCard";
import SearchBox from "./SearchBox";

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

    /** Filters companies by search term */
    async function search(term){
        const formattedTerm = term.trim().replace('.', '');
        const filteredCompanies =
            await JoblyApi.request(`companies`, {nameLike: formattedTerm});
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

export default CompaniesList;