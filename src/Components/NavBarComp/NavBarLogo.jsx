
//import {AiOutlineStock} from "react-icons/ai";

import {AiFillFire} from "react-icons/ai"

function NavBarLogo({ navTitle }){

    return (
        <h1 className={"flex text-2xl font-bold text-gray-900"}>
            <AiFillFire size={35} className={"text-red-500"}/>
            {navTitle}
        </h1>
    )

}

export default NavBarLogo;

