import cover from '../../../assets/images/user.png'
const Banner = () => {
    return (
        <div className=" flex gap-[90px] w-[90%] max-w-[1440px] mx-auto border border-red-600">
            <div className="w-[40%] border border-red-600">
                <div className='flex-col items-center  mt-24'>
                    <h2 className='text-[70px] font-bold'>One Step Closer To Your <span className="text-purple-400">Dream Job</span></h2>
                    <p className='mt-[24px] mb-[32px]'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button className='btn btn-primary'>Get Started</button>
                </div>
            </div>
            <div className=' border border-red-600'>

                <img src={cover} alt="" />

            </div>
        </div>
    );
};

export default Banner;