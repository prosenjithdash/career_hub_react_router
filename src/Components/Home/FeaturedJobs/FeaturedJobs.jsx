import { useEffect, useState } from "react";
import FeaturedJobCard from "./FeaturedJobCard/FeaturedJobCard";
// import { useLoaderData } from "react-router-dom";

const FeaturedJobs = () => {

    // It is not a route so do no support loader and useLoaderData
    // const featuredJobsData = useLoaderData();
    // console.log(featuredJobsData);

    // hold jobs data with useState
    const [jobs, setJobs] = useState([]);

    //47-5 Add Icons And Handle Show All Jobs
    // This is not a best way to load show all data
    const [showData, setShowData] = useState(4);

    // sideEffet jobs data 
    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])
    return (
        <div className="w-[90%] max-w-[1440px] mx-auto my-[130px]">
            <div className="w-[50%] max-w-[1000px] mx-auto text-center mb-[32px]">
                <h2 className='text-[48px] font-bold'>Featured Jobs</h2>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div>
                {/* <h2>Total Featured Jobs : {jobs.length}</h2> */}
                {/* 47-5 Add Icons And Handle Show All Jobs */}
                <div className="lg:grid lg:grid-cols-2 gap-5 ">
                    {
                        jobs.slice(0, showData).map(job => <FeaturedJobCard key={job.id} job={job}></FeaturedJobCard>)
                    }
                </div>
            </div>
            <div className={showData === jobs.length && 'hidden'}>
                {/* 47-5 Add Icons And Handle Show All Jobs */}
                <div className="mt-10 text-center">
                    <button onClick={() => setShowData(jobs.length)} className=" bg-[#1631e0] rounded-lg text-white py-4 px-4 font-bold">See all jobs</button>
                </div>
            </div>
        </div>
    );
};

export default FeaturedJobs;