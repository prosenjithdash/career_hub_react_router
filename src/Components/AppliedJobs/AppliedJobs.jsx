import { useLoaderData } from "react-router-dom";
import AppliedJob from "./AppliedJob/AppliedJob";

const AppliedJobs = () => {
    const appliedJob = useLoaderData();
    console.log(appliedJob)
    return (
        <div className="w-[90%] max-w-[1440px] mx-auto mt-[50px]">
            <h2>Applied Jobs.</h2>
            <div>
                {
                    appliedJob.map(appliedJob => <AppliedJob appliedJob={appliedJob} key={appliedJob.id}></AppliedJob>)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;