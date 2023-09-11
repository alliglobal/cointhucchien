
import { Avatar, Tooltip } from "@mui/material";
import InfoIcon from '@mui/icons-material/Info';
import "./CryptoInfoSection.css"


function DataPoint({ title, value }) {
    return (
        <div className={"flex gap-2 lg:flex-col text-center info--seperator"}>
            <h1 className={"flex gap-1 detail--label items-center font-semibold"}>
                {title}:
            </h1>
            <h1 className={"font-light detail--label"}>{value.toLocaleString()}</h1>
        </div>
    );
}

function CryptoInfoSection({ infoData }) {

    if (!infoData || typeof infoData !== 'object') {
        return <div>No data available</div>;
    }

    return (
        <div className={""}>
            <div className={"p-3 flex justify-around btc--info gap-4 label--bg rounded-lg "}>
                <div className={"flex items-center gap-2"}>
                    <Avatar
                        alt="Remy Sharp"
                        size="sm"
                        src={`${infoData.image.small}`}
                    />
                    <h1 className={"font-bold info--label"}>{infoData.symbol} Info:</h1>
                </div>

                <DataPoint title="Market Cap" value={infoData.market_data.market_cap.usd || 'N/A'} />
                <DataPoint title="Valuation" value={infoData.market_data.fully_diluted_valuation?.usd || 'N/A'} />
                <DataPoint title="Total Volume" value={infoData.market_data.total_volume?.usd || 'N/A'} />
                <DataPoint title="High 24h" value={infoData.market_data.high_24h?.usd || 'N/A'} />
                <DataPoint title="Price Change 24h" value={infoData.market_data.price_change_percentage_24h || 'N/A'} />

            </div>
        </div>
    );
}

export default CryptoInfoSection;
