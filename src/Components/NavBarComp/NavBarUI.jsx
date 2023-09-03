


import { BiSolidMoon } from "react-icons/bi";
import NavBarLogo from "./NavBarLogo.jsx";
import NavBarLists from "./NavBarLists.jsx";

function NavBar() {
    return (
        <>
            <div className={"p-4 flex text-center justify-between lg:justify-between items-center"}>
                <NavBarLogo navTitle={"CryptoView"}/>
                <NavBarLists />
            </div>
            <hr></hr>
        </>

    )
}
export default NavBar;
