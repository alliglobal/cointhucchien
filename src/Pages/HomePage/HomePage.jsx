
import NavBarUI from "../../Components/NavBarComp/NavBarUI.jsx";
import StockBody from "../../Components/BodyStatsCard/StockBody.jsx";
import MarketUI from "../../Components/MainBodyComp/MarketUI.jsx";
import {AllDataFetch} from "../../Components/CryptoDataFetch/AllDataFetch.jsx";
import LinearProgress from '@mui/material/LinearProgress';
import {Alert, Space, Spin} from 'antd';
import CryptoNews from "../../Components/CryptoNews/CryptoNews.jsx";
import {useState} from "react";
import {CryptoDataFetch} from "../../Components/CryptoDataFetch/CryptoDataFetch.jsx";
import NavBarLayout from "../../Components/Layout/NavBarLayout.jsx";
import {ShuffleData} from "../../ToolsFunctions/SortData.jsx";

function HomePage(){

    const cryptoDatas = AllDataFetch();
    const newsData = CryptoDataFetch();


    if (cryptoDatas.length === 0 && newsData.length === 0 ) {
        return <div>
            <LinearProgress />

            <div style={{position: 'fixed', top: '40%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center'}}>
                <Spin size="large" tip={"Loading..."} >
                    <div className="p-10 bg-opacity-5 bg-gray-100 rounded-md"></div>
                </Spin>
            </div>

            <div className={"lg:w-1/4 lg:-mt-7 w-5/6"} style={{position: 'fixed', top: '55%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center'}}>
                <Alert
                    message={<h1 className={"text-1xl"}>Getting Crypto Data...</h1>}
                    description={<p className={"text-gray-700"}>Please wait briefly while we retrieve the data.</p>}
                    type="info"
                />
            </div>

        </div>;
    }

    return (
        <NavBarLayout searchData={cryptoDatas}>
            <StockBody cryptoDatas={cryptoDatas}/>
            <MarketUI title={"Popular Market"} cryptoDatas={cryptoDatas} randomSet={false}/>
            <CryptoNews newsData={newsData}/>
        </NavBarLayout>
    )

}

export default HomePage;