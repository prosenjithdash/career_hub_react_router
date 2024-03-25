import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="mt-20 p-20 text-center">
            <h2 className="text-4xl text-red-600 font-extrabold">OOPS!</h2>
            <Link to='/'><button className="btn btn-primary">Go to Home</button></Link>
        </div>
    );
};

export default Error;