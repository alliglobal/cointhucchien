
import MarketDataUI from "./MarketDataUI.jsx";

function MarketUI({cryptoDatas}){

    const currencies = [
        "USD", "EUR", "JPY"
    ];

    return (
        <div className={""}>

            <div className={"flex items-center justify-between"}>
                <h1 className={"text-3xl font-bold ml-2 lg:ml-3 "}>Popular Market<span className={"text-7xl leading-3 text-blue-500"}>.</span></h1>

                <select className={"mr-3 border border-blue-500 text-blue-500 font-light lg:p-1 rounded"} style={{ outline: 'none', borderColor: '#3498db' }}>
                        {currencies.map(currency => (
                            <option className={"font-light text-1xl"} key={currency} value={currency} defaultValue={currency === 'usd'}>{currency.toUpperCase()}</option>
                        ))}
                </select>

            </div>
            <MarketDataUI data={cryptoDatas}/>
        </div>
    )
}

export default MarketUI;