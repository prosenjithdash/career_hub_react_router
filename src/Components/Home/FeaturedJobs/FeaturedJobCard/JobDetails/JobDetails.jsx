import { useLoaderData, useParams } from "react-router-dom";

const JobDetails = () => {

    // load data from loader route
    const jobD = useLoaderData();

    // get view details id
    const { jobId } = useParams();
    const jobInt = parseInt(jobId);

    // find out view details id data
    const job = jobD.find(job => job.id === jobInt);
    console.log(job)

    console.log(jobId, jobD)
    return (
        <div>
            <h2>Job details page: {jobInt}</h2>
            <p>{job.job_title}</p>

            <div className="md:grid gap-4 md:grid-cols-4">
                <div className="border md:col-span-3">
                    <h2 className="text-4xl">Details Coming Hare...</h2>
                </div>
                <div className="border ">
                    <button className="btn btn-primary text-center">Add Card</button>
                </div>

            </div>
        </div>
    );
};

export default JobDetails;