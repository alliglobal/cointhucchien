
import { useEffect, useState } from "react";

export function CryptoDataFetch() {
    const [cryptoData, setCryptoData] = useState([]);
    const apiKey = "pub_28721ab1ed6729bfc922f16c28c0475b1e35b";
    const apiUrl = `https://newsdata.io/api/1/news?apikey=${apiKey}&q=cryptocurrency&country=us&size=4`;

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(apiUrl);
                if (!response.ok) {
                    throw new Error(`Fetch failed with status ${response.status}`);
                }
                const data = await response.json();
                setCryptoData(data);

                // Cache the fetched data with a timestamp
                const currentTime = Date.now();
                localStorage.setItem("cryptoNewsData", JSON.stringify(data));
                localStorage.setItem("cryptoNewsDataTimestamp", currentTime.toString());
            } catch (error) {
                console.error("Error fetching cryptocurrency news data:", error);
            }
        }

        // Check if cached data is available and not older than 5 minutes
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
