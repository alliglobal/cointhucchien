
import NavBarLogo from "./NavBarLogo.jsx";
import NavBarLists from "./NavBarLists.jsx";
import { Link } from 'react-router-dom'
import "./NarBarUI.css"
import NavBarSearch from "./NavBarSearch.jsx";


function NavBarUI(props) {

    return (
        <>
            <div className={"p-3 flex text-center justify-between lg:justify-between items-center hide--underline"}>
                <Link to={"/"}>
                    <NavBarLogo/>
                </Link>

                <Link to={"/"}>
                    <NavBarLogo/>
                </Link>

                <Link to={"/"}>
                    <NavBarLogo/>
                </Link>

                <NavBarLists searchData={props.searchDatas}/>
            </div>
            <hr></hr>
        </>
    );

}
export default NavBarUI;
