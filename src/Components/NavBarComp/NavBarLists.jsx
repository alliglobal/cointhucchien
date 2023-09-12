

import {useState} from "react";
import * as React from 'react';
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
        </div>
    );
}

export default NavBarLists;