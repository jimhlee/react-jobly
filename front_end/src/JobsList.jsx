import React, { useState, useEffect } from "react";
import JoblyApi from "./helpers/api";
import JobCardList from "./JobCardList";
/**
 * JobsList: Displays a list of all the jobs
 *
 * state: jobs
 *
 * props: none
 *
 * App -> RoutesList -> JobsList -> JobCardList -> JobCard
 *
 */
function JobsList() {
    const [jobs, setJobs] = useState({
        data: null,
        isLoading: true
    });
    console.log('jobs list state: jobs', jobs);

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

    // FIXME: add search function here just like companieslist

    if (jobs.isLoading) return <i>Loading...</i>;


    return (
        <div>
            <JobCardList jobs={jobs} search={'FIXME:'} />
        </div>
    );
}

export default JobsList;
