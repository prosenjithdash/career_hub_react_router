import Banner from "../Header/Banner/Banner";
import Navbar from "../Header/Navbar/Navbar";
import JobCategoryList from "./JobCategoryList/JobCategoryList";

const Home = () => {
    return (
        <div>
            <div className="bg-blue-100">
                <Banner></Banner>
           </div>
            <JobCategoryList></JobCategoryList>
            
        </div>
    );
};

export default Home;