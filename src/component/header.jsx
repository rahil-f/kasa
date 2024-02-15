import React from "react";
import Logo from "../assets/LOGO.png";
import navDatas from "../data/nav";
import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <div className="w-full flex flex-row justify-between items-center p-5">
            <img className="w-[145px]" src={Logo} alt="" />
            <nav className=" flex flex-row gap-6">
                {navDatas.map((navData) => (
                    <a
                        className={`${
                            location.pathname === navData.redirect
                                ? "underline"
                                : ""
                        } font-montserrat text-right text-black	text-sm	font-medium	leading-4`}
                        onClick={() => navigate(navData.redirect)}
                        key={navData.name}>
                        {navData.name}
                    </a>
                ))}
            </nav>
        </div>
    );
};

export default Header;
