import React, { useState, useEffect } from "react";
import JoblyApi from "./helpers/api";
import { useParams } from "react-router-dom";


/**
 * CompanyDetail: Displays all the job cards associated with a company
 *
 * state: company
 *
 * props: none
 *
 * App -> RoutesList -> CompanyDetail -> JobCardList -> JobCard
 *
 */
function CompanyDetail() {
    const { handle } = useParams();

    const [company, setCompany] = useState({
        data: null,
        isLoading: true
    });
    //console.log('company object state: company', company)
    //console.log(handle);

    useEffect(function fetchCompanyWhenMounted() {
        console.log('useffect company object')
        async function fetchCompany() {
            const companyResult = await JoblyApi.getCompany(handle);
            setCompany({
                data: companyResult,
                isLoading: false
            });
        }
        fetchCompany();
    }, []);
    return (
        <div>
            <h4>{company.data.name}</h4>
            <p>{company.data.description}</p>
        </div>)
}

export default CompanyDetail;
