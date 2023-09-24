import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (

        <div className="bg-base-100 mt-6">
            <div className="flex justify-between">
                <div>
                    <div>
                        <img src="./Logo.png" alt="" />
                    </div>
                </div>
                <div>
                    <ul className="flex mt-3">
                        <li className="px-3">
                            <NavLink
                                to="/"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-red-600 underline bg-none" : ""
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="px-4">
                            <NavLink
                                to="/donation"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-red-600 underline bg-none" : ""
                                }
                            >
                                Donation
                            </NavLink>
                        </li>
                        <li className="px-3">
                            <NavLink
                                to="/statistics"
                                className={({ isActive, isPending }) =>
                                    isPending ? "" : isActive ? "text-red-600 underline bg-none" : ""
                                }
                            >
                                Statistics
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;