import { Outlet } from "react-router-dom";
import Navbar from "../../components/header/Navbar";

const MainLayout = () => {
    return (
        <>
            <div className="max-w-[1300px] mx-auto">
                <Navbar></Navbar>
            </div>
            <div className="max-w-[1300px] mx-auto">
                <Outlet></Outlet>
            </div>
        </>
    );
};

export default MainLayout;