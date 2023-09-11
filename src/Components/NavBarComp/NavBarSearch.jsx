
import React, {useEffect, useState} from 'react';
import { Button, Drawer, Input, Space } from 'antd';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import IconButton from '@mui/material/IconButton';
import NavBarSearchLists from "./NavBarSearchLists.jsx";

const NavBarSearch = ({ searchData }) => {
    const [open, setOpen] = useState(false);
    const [searchInput, setSearchInput] = useState('');
    const [filteredData, setFilteredData] = useState(searchData);

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);

    };

    useEffect(() => {
        if (!open) {
            setSearchInput('');
            setFilteredData(searchData);
        }
    }, [open, searchData]);


    const handleInputChange = (e) => {
        const inputValue = e.target.value;
        setSearchInput(inputValue);

        const filteredResults = searchData.filter((item) =>
            item.name.toLowerCase().includes(inputValue.toLowerCase())
        );

        setFilteredData(filteredResults);
    };

    return (
        <>
            <IconButton onClick={showDrawer} size="small">
                <SearchRoundedIcon sx={{ fontSize: "2rem", color: "#5f93e8" }} />
            </IconButton>

            <Drawer
                style={{ borderBottomRightRadius: "10px", borderBottomLeftRadius: "10px" }}
                title={
                    <div className={"flex items-center gap-3"}>
                        <Input
                            prefix={<SearchRoundedIcon sx={{ fontSize: "1.4em" }} />}
                            placeholder="Crypto Name (example: Bitcoin)"
                            style={{ flex: 4 }}
                            value={searchInput}
                            onChange={handleInputChange} // Handle input change
                        />
                    </div>
                }
                placement="top" onClose={onClose} open={open}>

                <NavBarSearchLists closeSearchDraw={onClose} searchDatas={filteredData} /> {/* Use filteredData for rendering */}
            </Drawer>
        </>
    );
};

export default NavBarSearch;
