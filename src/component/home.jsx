import React from "react";
import Header from "./header";
import Footer from "./footer";
import homeHeader from "../assets/homeHeader.png";
import database from "../data/database.json";
const Home = () => {
    // const homeHeader =
    //     "https://s3-alpha-sig.figma.com/img/4706/e7dd/e270fc8fc902a1eb738458e7b29c1899?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CrVMMTFKKMkwzUZUWFSm8AFCWIKgz6TJ51CMW4agI3U4eC6HAlWcWS9CTuWpk~QjhwzVKsUTVlX9QdI2RjrNjEh0vVf483o0mmCBHfVCNCVMAdkY31OcJf7~SUnIP6f2A~9iThcg7aAJgrwalhMm9J5I3KNxM5WmtaIr4plNXvMAes75KilR00NeJXYG95merdPDssZTpKXdnYu~b~rWvu44nbniKvbDhi5jhoOXYyNC10uYceNuDfPrrHaiv1TlRdsKQCaVrCJzFYBFyO~zHgzLnk-Zj-Yk~z3mfJTiFUp2OGMgV0dYlsMey6i4cza9RHBI4TAqUrlNIfLFFw0jEg__";
    return (
        <div>
            <Header />
            <div className={`my-5 px-6 h-[111px] w-full relative`}>
                <div
                    className={`h-full w-full rounded-[10px] bg-homeHeader bg-cover bg-center bg-no-repeat mix-blend-darken brightness-50 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] opacity-90 border-1 border-black`}></div>
                <p className="text-white font-montserrat font-bold text-2xl w-[225px] brightness-100 absolute left-9 top-7 leading-6">
                    Chez vous, partout et ailleurs
                </p>
            </div>
            <Footer />
        </div>
    );
};

export default Home;
