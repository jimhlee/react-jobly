import React, { useState, useEffect } from "react";
import JoblyApi from "./helpers/api";
import CompanyCard from "./CompanyCard";
import SearchBox from "./SearchBox";
import { useNavigate } from "react-router-dom";

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
    const navigate = useNavigate();

    const [companies, setCompanies] = useState({
        data: null,
        isLoading: true
    });
    console.log('companies list state: companies', companies);

    const [searched, setSearched] = useState("");

    console.log('searched', searched);


    useEffect(function fetchCompaniesWhenMounted() {
        console.log('useffect companies list');
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
    async function search(term) {
        const formattedTerm = term.trim().replace('.', '');
        if (formattedTerm.length < 1) {
            const companiesResult = await JoblyApi.getAllCompanies();
            setCompanies({
                data: companiesResult,
                isLoading: false
            });
            setSearched("");
            return;
        }

        const filteredCompanies =
        //TODO: Call the static method not request directly
            await JoblyApi.request(`companies`, { nameLike: formattedTerm });
        setCompanies({
            data: filteredCompanies.companies,
            isLoading: false
        });
        setSearched(formattedTerm);
    }

    if (companies.isLoading) return <i>Loading...</i>;
// Another ternary checking company length
    return (
        <div className="companies-list">
            <br />
            <SearchBox search={search} />
            <br />
            {searched ? <h2>{`Search Results for '${searched}'`}</h2> : <h2>All Companies</h2>}
            <br />
            <ul>
                {companies.data.map((c) => (
                    <li key={c.handle}>
                        <CompanyCard company={c} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CompaniesList;