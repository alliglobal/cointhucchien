
import {AiOutlineStock} from "react-icons/ai";

function NavBarLogo({ navTitle }){

    return (
        <h1 className={"flex text-2xl font-bold text-gray-900"}>
            <AiOutlineStock size={35} className={"text-blue-500"}/>
            {navTitle}
        </h1>
    )

}

export default NavBarLogo;