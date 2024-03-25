
const AppliedJob = ({ appliedJob }) => {
    const { id ,logo} = appliedJob;
    return (
        <div className="border p-4 mt-6">
            <h2>{id}</h2>
            <div className="flex gap-4">
                <div>
                    <img src={logo} alt="" />
                </div>
                <div>
                    <h2 className="font-bold text-xl">Senior Product Designer</h2>
                </div>
            </div>
        </div>
    );
};

export default AppliedJob;