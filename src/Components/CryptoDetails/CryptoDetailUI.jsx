
import React, { useEffect, useRef } from "react";
import { FaArrowTrendDown, FaArrowTrendUp } from "react-icons/fa6";
import { Avatar } from "@mui/joy";
import "./CryptoDetailUI..css"
import Chip from '@mui/joy/Chip';
import CryptoPriceChart from "./CryptoPriceChart.jsx";
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder.js';
import BookmarkIcon from '@mui/icons-material/Bookmark.js';
import Badge from '@mui/material/Badge';
import StarRoundedIcon from '@mui/icons-material/StarRounded.js';
import StarOutlineRoundedIcon from '@mui/icons-material/StarOutlineRounded.js';

function CryptoDetailUI({detailUI}) {


    return (
        <div className="lg:flex items-center justify-between mobile-detail">

            <div className="">

                <div className={"flex items-center gap-2"}>
                    <Avatar
                        alt="Remy Sharp"
                        src={`${detailUI.image.small}`}
                    />

                    <div className="flex gap-2 items-center">
                        <h2 className="font-bold text-4xl lg:text-4xl">{detailUI.name.split(" ").splice(0,1)}</h2>
                        <p className="crypto-label text-gray-400">({detailUI.symbol})</p>
                        <BookmarkBorderIcon  color={"primary"} sx={{marginTop: "5px"}}/>

                        <Badge badgeContent={detailUI.sentiment_votes_up_percentage} color="primary" sx={{display: {xs: 'none', sm: 'flex',}, marginTop: "5px"}}>
                            <StarOutlineRoundedIcon sx={{fontSize: "2em"}} color="primary" />
                        </Badge>

                    </div>
                </div>

                <div className={""}>

                    <div className={"flex gap-2 mt-4 ml-3"}>
                        {detailUI.hashing_algorithm && <Chip color={"primary"} variant={"outlined"}>{detailUI.hashing_algorithm}</Chip>}
                        {detailUI.categories.slice(0,3).map((category, index) => (
                            <Chip
                                key={index}
                                color={"primary"}
                                variant={"outlined"}
                            >
                                {category.split(" ").splice(0, 1)}
                            </Chip>
                        ))}
                    </div>

                </div>

            </div>

            <div className="flex items-center gap-5 mt-2">
                <h1 className={"crypto--price"}>${detailUI.market_data.current_price.usd.toLocaleString()}</h1>

                <div className="flex gap-1 items-center">
                    {detailUI.market_data.price_change_percentage_24h < 0 ? (
                        <FaArrowTrendDown style={{ color: "FF6666", fontSize: "2rem" }} />
                    ) : (
                        <FaArrowTrendUp
                            style={{ color: "rgb(134 239 172)", fontSize: "2rem" }}
                        />
                    )}
                    <p className={`${detailUI.market_data.price_change_percentage_24h < 0 ? "down" : "text-green-300"} text-2xl`}>{detailUI.market_data.price_change_percentage_24h.toFixed(2)}%</p>

                </div>
            </div>

        </div>
    );
}

export default CryptoDetailUI;
