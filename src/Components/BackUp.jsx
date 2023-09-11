

import NavBarLogo from "./NavBarLogo.jsx";
import NavBarLists from "./NavBarLists.jsx";
import { Link } from 'react-router-dom'
import StarRoundedIcon from "@mui/icons-material/StarRounded.js";
import React from "react";

function NavBar(

) {
    return (
        <>
            <div className={"p-4 flex text-center justify-between lg:justify-between items-center"}>

                <Link to={"/"}>
                    <NavBarLogo navTitle={"CryptoView"}/>
                </Link>

                <NavBarLists />

                <Link to={"/about"} className={"flex items-center nav-link"}>
                    <StarRoundedIcon/> Watchlist
                </Link>
            </div>
            <hr></hr>
        </>

    )
}
export default NavBar;
