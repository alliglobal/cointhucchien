
import CryptoNewsCard from "./CryptoNewsCard.jsx";
import { CryptoDataFetch } from "../CryptoDataFetch/CryptoDataFetch.jsx";

function CryptoNews() {

    const newsData = CryptoDataFetch();

    const newsItems = newsData.results || [];

    return (
        <>
            <h1 className={"text-3xl font-bold ml-2 lg:ml-3 margin-10"}>Crypto News<span className={"text-7xl leading-3 text-blue-500"}>.</span></h1>

            <div className={"p-3 flex justify-center flex-wrap gap-7"}>
                {newsItems.map((items, index) => {
                    return <CryptoNewsCard key={index} data={items} />
                })}
            </div>
        </>
    );
}

export default CryptoNews;
