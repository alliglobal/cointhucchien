
import CryptoNewsCard from "./CryptoNewsCard.jsx";
import { CryptoDataFetch } from "../CryptoDataFetch/CryptoDataFetch.jsx";

function CryptoNews({newsData}) {


    const newsItems = newsData.Data || [];

    console.log(newsItems)

    return (
        <>
            <h1 className={"text-3xl font-bold ml-2 lg:ml-3 lg:-mt-10 -mt-5"}>Crypto News<span className={"text-7xl leading-3 text-blue-500"}>.</span></h1>

            <div className={"p-3 flex-col items-center "}>
                {newsItems.map((items, index) => {
                    return <CryptoNewsCard key={index} data={items} />
                })}
            </div>
        </>
    );
}

export default CryptoNews;
