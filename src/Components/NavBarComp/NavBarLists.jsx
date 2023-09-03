
import {BiSolidMoon} from "react-icons/bi";
import Button from '@mui/material/Button';
import LightModeIcon from '@mui/icons-material/LightMode';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import {useState} from "react";
function NavBarLists(){

    const [IsDark, setIsDark] = useState(false)

    function toggleDarkMode() {
        setIsDark(prevState => !prevState);
    }

    return (
            <div className={"flex items-center"}>
                <Button style={{minHeight:"35px", marginRight:10, fontWeight: "bold", borderWidth: "2px"}} variant="outlined">Sign Up</Button>
                {
                    IsDark ?
                        <div onClick={toggleDarkMode}>
                            <LightModeIcon sx={{ fontSize: 35 }} vclassName={"text-gray-5 00 border-black"}/>
                        </div>
                        :
                        <div onClick={toggleDarkMode}>
                            <LightModeOutlinedIcon sx={{ fontSize: 35 }} className={"text-gray-5 00 border-black"}/>

                        </div>
                }
            </div>
    )
}

export default NavBarLists;