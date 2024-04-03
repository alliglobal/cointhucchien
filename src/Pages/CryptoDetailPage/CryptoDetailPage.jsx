
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab from '@mui/joy/Tab';
import TabPanel from '@mui/joy/TabPanel';
import React from "react";
import CryptoDetailUI from "../../Components/CryptoDetails/CryptoDetailUI.jsx";
import CryptoPriceChart from "../../Components/CryptoDetails/CryptoPriceChart.jsx";
import "./CryptoDetailPage.css"
import CryptoInfoSection from "../../Components/CryptoDetails/CryptoInfoSection.jsx";
import {AllDataFetch} from "../../Components/CryptoDataFetch/AllDataFetch.jsx";
import MarketUI from "../../Components/MainBodyComp/MarketUI.jsx";
import CryptoDetailSummary from "../../Components/CryptoDetails/CryptoDetailSummary.jsx";
import {useParams} from "react-router-dom";
import {CryptoDetailFetch} from "../../Components/CryptoDataFetch/CryptoDetailFetch.jsx";
import LinearProgress from "@mui/material/LinearProgress";
import {Spin} from "antd";
import NavBarLayout from "../../Components/Layout/NavBarLayout.jsx";

function CryptoTabs(){

    const tabLightStyle = {
        backgroundColor: 'transparent', // Set the background color to transparent
    };
    const tabStyle = {
        marginRight: "0.5em",
        borderRadius: "xl",
    }

    const cryptoDatas = AllDataFetch();
    const { cryptoID } = useParams();

    const cryptoDetail = CryptoDetailFetch({cryptoID});

    if (cryptoDetail.length == 0) {
        return (
            <>
                <LinearProgress />

                <div style={{position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center'}}>
                    <Spin size="large" tip={"Loading..."} >
                        <div className="p-10 bg-opacity-5 bg-gray-100 rounded-md"></div>
                    </Spin>
                </div>
            </>
        )
    }

    return (
        <NavBarLayout showFooter={true} searchData={cryptoDatas}>
            <div className={"p-3"}>
                <CryptoDetailUI detailUI={cryptoDetail}/>

                <Tabs defaultValue={0} size="sm" className={""} sx={tabLightStyle}>
                    <TabList disableUnderline className={"lg:justify-end justify-normal"}>
                        <Tab variant="soft" color={"primary"} disableIndicator sx={tabStyle}>Insight</Tab>
                        {/* <Tab variant="soft" color={"primary"} disableIndicator sx={tabStyle}>Insight</Tab>
                        <Tab variant="soft" color={"primary"} disableIndicator sx={tabStyle}>Insight</Tab> */}
                        {cryptoDetail.description.en && <Tab variant="soft" color={"primary"} disableIndicator sx={tabStyle}>Chart</Tab>}
                    </TabList>
                    <TabPanel value={1}>
                        <CryptoPriceChart Spikelinedata={cryptoDetail.market_data.sparkline_7d.price} />
                    </TabPanel>
                    <TabPanel value={0}>
                        <CryptoDetailSummary detaildata={cryptoDetail}/>
                    </TabPanel>
                </Tabs>

                <CryptoInfoSection infoData={cryptoDetail}/>
                <MarketUI title={""} cryptoDatas={cryptoDatas} randomSet={true}/>
            </div>
        </NavBarLayout>
    );
}

export default CryptoTabs;
