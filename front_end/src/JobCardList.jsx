import React from "react";
import JobCard from "./JobCard";

/**
 * JobCardList: Displays a list of all the job cards
 *
 * state: none
 *
 * props: jobs
 *
 * App -> RoutesList -> JobsList -> JobCardList -> JobCard
 *
 */
function JobCardList({ jobs, search }) {

    return (
        <div>
            <SearchBox search={search} />

            <ul>
                {jobs.data.map((j, i) => (
                    <li key={i}>
                        <JobCard job={j} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default JobCardList;