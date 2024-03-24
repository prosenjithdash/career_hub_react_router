import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Header/Navbar/Navbar";

const MainRoot = () => {
    return (
        <div>
            <div className="w-[90%] max-w-[1440px] mx-auto">
                <Navbar></Navbar>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainRoot;