
import { useEffect, useState } from "react";


export function CryptoDataFetch() {
    const [cryptoData, setCryptoData] = useState([]);
    const apiUrl = `https://min-api.cryptocompare.com/data/v2/news/?lang=EN&${process.env.CRYPTO_NEWS_KEY}`;

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(apiUrl);
                if (!response.ok) {
                    throw new Error(`Fetch failed with status ${response.status}`);
                }
                const data = await response.json();
                setCryptoData(data);

                const currentTime = Date.now();
                localStorage.setItem("cryptoNewsData", JSON.stringify(data));
                localStorage.setItem("cryptoNewsDataTimestamp", currentTime.toString());
            } catch (error) {
                console.error("Error fetching cryptocurrency news data:", error);
            }
        }

        const cachedDataString = localStorage.getItem("cryptoNewsData");
        const cachedTimestampString = localStorage.getItem("cryptoNewsDataTimestamp");

        if (cachedDataString && cachedTimestampString) {
            const cachedTimestamp = parseInt(cachedTimestampString, 10);
            const currentTime = Date.now();
            const timeDiff = (currentTime - cachedTimestamp) / (1000 * 60); // Calculate time difference in minutes

            if (timeDiff <= 5) {
                setCryptoData(JSON.parse(cachedDataString));
                return;
            }
        }

        fetchData();
    }, []);

    return cryptoData;
}
