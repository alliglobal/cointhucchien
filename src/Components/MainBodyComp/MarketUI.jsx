
import MarketDataUI from "./MarketDataUI.jsx";
import {ShuffleData} from "../../ToolsFunctions/SortData.jsx";

function MarketUI({cryptoDatas, title, randomSet}){

    const cryptoData = randomSet ? ShuffleData(cryptoDatas) : cryptoDatas;

    return (
        <div className={""}>

            <div className={"flex items-center justify-between"}>
                {title &&
                    <h1 className={"text-3xl font-bold ml-2 lg:ml-3 "}>{title}<span className={"text-7xl leading-3 text-blue-500"}>.</span></h1>

                }
            </div>
            <MarketDataUI randomData={randomSet} data={cryptoData}/>
        </div>
    )
}

export default MarketUI;