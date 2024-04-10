import React, { useState, useEffect } from "react";
import JoblyApi from "./helpers/api";
import JobCardList from "./JobCardList";
import SearchBox from "./SearchBox";
/**
 * JobsList: Displays a list of all the jobs
 *
 * state: jobs
 *
 * props: none
 *
 * App -> RoutesList -> {JobsList, CompanyDetail} -> JobCardList -> JobCard
 *
 */
//TODO: add title like Search Results for 'and'
function JobsList() {
    const [jobs, setJobs] = useState({
        data: null,
        isLoading: true
    });
    console.log('jobs list state: jobs', jobs);

    const [searched, setSearched] = useState("");
    console.log("searched", searched);

    useEffect(function fetchJobsWhenMounted() {
        console.log('useffect jobs list');
        async function fetchJobs() {
            const jobsResult = await JoblyApi.getAllJobs();
            setJobs({
                data: jobsResult,
                isLoading: false
            });
        }
        fetchJobs();
    }, []);

    /** Filters jobs by search term */
    async function search(term) {
        const formattedTerm = term.trim().replace('.', '');
        if (formattedTerm.length < 1) {
            const JobsResult = await JoblyApi.getAllJobs();
            setJobs({
                data: JobsResult,
                isLoading: false
            });
            setSearched("");
            return;
        }

        const filteredJobs =
            await JoblyApi.request(`jobs`, { title: formattedTerm });
        setJobs({
            data: filteredJobs.jobs,
            isLoading: false
        });

        setSearched(formattedTerm);
    }


    if (jobs.isLoading) return <i>Loading...</i>;


    return (
        <div>
            <br />
            <SearchBox search={search} />
            <br />
            {searched ? <h2>{`Search Results for '${searched}'`}</h2> : <h2>All Jobs</h2>}
            <br />
            <JobCardList jobs={jobs.data} />
        </div>
    );
}

export default JobsList;
