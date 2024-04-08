
import React, {useEffect, useState} from 'react';
import { Space, Table } from 'antd';
import {Avatar, Chip} from "@mui/joy";
import "./MarketDataUI.css"
import binanceLogo from "../../assets/binance_logo.png";
import {FaArrowTrendDown, FaArrowTrendUp} from "react-icons/fa6";
import { Sparklines, SparklinesLine } from 'react-sparklines';
import { useNavigate, Link } from 'react-router-dom';

function MarketDataUI({data}) {


    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const navigate = useNavigate();


    const onRowClick = (record) => {
        navigate(`/detail/${record.id}`);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const columns = [
        {
            title: 'Coin',
            dataIndex: 'name',
            key: 'name',
            render: (text,record) => (
                <div className={"flex items-center gap-5"}>
                    <div className={"flex gap-2"}>
                        <Avatar sx={{ width: 30, height: 30 }} alt="Remy Sharp" src={record.image} />
                        <div className={"flex items-center gap-2"}>
                            <h2 className={"crypto-name"}>{record.name.split(" ").slice(0,1)}</h2>
                            <p className={"crypto-sign font-normal text-1xl text-gray-500"}>{record.symbol.toUpperCase()}</p>
                        </div>
                    </div>
                </div>
            )
        },
        {
            title: 'Price',
            dataIndex: 'current_price',
            key: 'current_price',
            render: (text,record) => (
                <p className={"crypto-price "}>${record.current_price.toLocaleString()}</p>
            )
        },
        {
            title: 'Change 1h',
            dataIndex: 'change_percent',
            key: 'change_percent',
            render: (text, record) => (
                <div className="hidden md:flex items-center">
                    {record.price_change_percentage_1h_in_currency < 0 ?
                        <FaArrowTrendDown style={{color: "FF6666", fontSize:"1rem"}} />
                        :
                        <FaArrowTrendUp style={{color: "rgb(134 239 172)", fontSize:"1rem"}} />

                    }
                    <p className={`${record.price_change_percentage_1h_in_currency < 0 ? "down" : "text-green-300"} crypto-name ml-1`}>{record.price_change_percentage_1h_in_currency.toFixed(2)}%</p>
                </div>
            ),
            responsive: ['md'],
        },

        // {
        //     title: 'Change 24h',
        //     dataIndex: 'change_percent',
        //     key: 'change_percent',
        //     render: (text, record) => (
        //         <div className="hidden md:flex items-center">
        //             {record.price_change_percentage_24h < 0 ?
        //                 <FaArrowTrendDown style={{color: "FF6666", fontSize:"1rem"}} />
        //                 :
        //                 <FaArrowTrendUp style={{color: "rgb(134 239 172)", fontSize:"1rem"}} />

        //             }
        //             <p className={`${record.price_change_percentage_24h < 0 ? "down" : "text-green-300"} crypto-name ml-1`}>{record.price_change_percentage_24h.toFixed(2)}%</p>
        //         </div>
        //     ),
        //     responsive: ['md'],
        // },

        {
            title: "Trade",
            render: (text, record) => (
                <Link to={"https://www.binance.com/en/activity/referral/offers/claim?ref=CPA_008YV3Z82D"}>
                    <img className={"binance-logo"} src={binanceLogo} alt="Binance" />
                </Link>
            )           
        },

        // {
        //     title: "Signal",
            
        // },

        {
            title: "Graph",
            render: (text, record) => (
                <Sparklines
                    data={record.sparkline_in_7d.price}
                    style={{
                        width: windowWidth < 768 ? '100%' : '100%',
                        height: '25px',
                        maxWidth: '100%',
                    }}
                >
                    {record.price_change_percentage_24h < 0 ? (
                        <SparklinesLine color="#FF6666" style={{ strokeWidth: 1 }} />
                    ) : (
                        <SparklinesLine color="#31BD64FF" style={{ strokeWidth: 1 }} />
                    )}
                </Sparklines>
            ),
        },
    ];

    return (
        <div className={"p-2"}>
            <Table size={"small"} columns={columns} dataSource={data.map((item, index) => ({ ...item, key: index }))}

                   onRow={(record) => ({
                       onClick: () => onRowClick(record)
                   })}
                   rowClassName="cursor-pointer"
            />
        </div>
    );
}

export default MarketDataUI;
