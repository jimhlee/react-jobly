import React from "react";

/**
 * JobCard: Displays a single job
 *
 * state: none
 *
 * props: job
 *
 * App -> RoutesList -> JobsList -> JobCardList -> JobCard
 *
 */


function JobCard({ job }) {
    return (
        <div>
            <h3>Title: {job.title}</h3>
            <h4>Company: {job.companyName}</h4>
            <h5>Salary: {job.salary}</h5>
            <h5>Equity: {job.equity}</h5>
            <br />
        </div>
    );
}

export default JobCard;