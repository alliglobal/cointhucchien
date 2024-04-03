
import React from "react";
import "./CryptoDetailSummary.css";

function CryptoDetailSummary({ detaildata }) {

    return (
        <div className={"summary--bg rounded-lg p-3"}>
            <h1 className={"text-3xl font-bold mb-2"}>What is {detaildata.name}?</h1>
            <p className={"paragraph--detail font-light overflow-hidden"}>{detaildata.description.en}</p>

            {/* <p className={"paragraph--detail font-light overflow-hidden"}>{detaildata.CryptoDetailSummary}</p> */}
        </div>
    );
}

export default CryptoDetailSummary;
