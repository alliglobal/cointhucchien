

import {useState} from "react";
import Dropdown from '@mui/joy/Dropdown';
import Menu from '@mui/joy/Menu';
import MenuButton from '@mui/joy/MenuButton';
import MenuItem from '@mui/joy/MenuItem';
import * as React from 'react';
import {Link} from "react-router-dom";
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import {Avatar} from "@mui/joy";
import LightModeIcon from '@mui/icons-material/LightMode';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import NavBarSearch from "./NavBarSearch.jsx";
function NavBarLists({searchData}){

    const searchDataList = searchData
    const [open, setOpen] = React.useState(false);

    const handleOpenChange = React.useCallback((event, isOpen) => {
        setOpen(isOpen);
    }, []);


    return (
        <div className={"flex items-center"}>
            {searchData && <NavBarSearch searchData={searchData}/>}

            <Dropdown open={open} onOpenChange={handleOpenChange} >
                <MenuButton sx={{border: "None"}} color="info">
                    <Avatar alt="Remy Sharp" src={"https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880"}>PS</Avatar>
                </MenuButton>
                <Menu >
                    <MenuItem>
                        <Link to={"/about"} className={`flex items-center navbar--lists`}>
                            <StarRoundedIcon sx={{ fontSize: "1.4rem" }} /> Watchlist
                        </Link>
                    </MenuItem>
                    <MenuItem><PersonRoundedIcon />My account</MenuItem>
                    <MenuItem ><LogoutRoundedIcon /> Logout</MenuItem>
                </Menu>
            </Dropdown>


        </div>
    );
}

export default NavBarLists;