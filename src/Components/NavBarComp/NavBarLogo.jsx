
//import {AiOutlineStock} from "react-icons/ai";
import "./NavBarLogo.css"
import  fireIcon from "../../assets/fire_icon.jpg"

function NavBarLogo(){

    return (
        <div className={"flex text-2xl font-bold text-gray-900 logoContainer"}>
            <img className={"logo"} src={fireIcon} alt="Logo" />
            <h3 className={"header"}>CoinThucChien</h3>
        </div>
    )

}

export default NavBarLogo;

