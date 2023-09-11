
import NavBarUI from "../NavBarComp/NavBarUI.jsx";
import FooterPage from "../../Pages/FooterPage/FooterPage.jsx";

function NavBarLayout(props){

    return (
        <>
            <NavBarUI searchDatas={props.searchData}/>
            {props.children}
            <FooterPage />
        </>
    )

}

export default NavBarLayout;