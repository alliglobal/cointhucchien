
import React from 'react';
import { Space, Table } from 'antd';
import Sparkline from "../SparklineComp/Sparkline.jsx";
import {Avatar, Chip} from "@mui/joy";
import "./MarketDataUI.css"
import {FaArrowTrendDown, FaArrowTrendUp} from "react-icons/fa6";


function MarketDataUI({data}) {

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
            title: 'Change',
            dataIndex: 'change_percent',
            key: 'change_percent',
            render: (text, record) => (
                <div className="hidden md:flex items-center">
                    {record.price_change_percentage_24h < 0 ?
                        <FaArrowTrendDown style={{color: "FF6666", fontSize:"1rem"}} />
                        :
                        <FaArrowTrendUp style={{color: "rgb(134 239 172)", fontSize:"1rem"}} />

                    }
                    <p className={`${record.price_change_percentage_24h < 0 ? "down" : "text-green-300"} crypto-name ml-1`}>{record.price_change_percentage_24h.toFixed(2)}%</p>
                </div>
            ),
            responsive: ['md'], // Hide this column on screens smaller than 'md'
        },
        {
            title: "Graph",
            render: (text, record) => (
                <Sparkline data={record.sparkline_in_7d.price} />
            ),
        },
    ];

    return (
        <div className={"p-2"}>
            <Table size={"small"} columns={columns} dataSource={data.map((item, index) => ({ ...item, key: index }))} />
        </div>
    );
}

export default MarketDataUI;
