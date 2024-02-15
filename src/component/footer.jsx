import React from "react";
import logo from "../assets/LOGOWhite.png";
const Footer = () => {
    return (
        <div className="h-[209px] bg-black flex flex-col justify-center items-center">
            <img className="w-[122px]" src={logo} alt="" />
            <p className="w-[133px] text-white text-center pt-2">
                © 2020 Kasa. All rights reserved
            </p>
        </div>
    );
};

export default Footer;
