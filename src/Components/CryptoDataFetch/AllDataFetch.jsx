
import { useEffect, useState } from "react";

export function AllDataFetch() {
    const [allData, setAllData] = useState([]);
    const apiUrl =
            "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=500&page=1&sparkline=true&price_change_percentage=1h&locale=en";

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(apiUrl);

                if (!response.ok) {
                    alert(`Error Fetching Crypto Data ${response.status}`);
                }

                const data = await response.json();
                setAllData(data);

                // Cache the fetched data in local storage with a timestamp
                const currentTime = new Date().getTime();
                const cachedData = {
                    data: data,
                    timestamp: currentTime,
                };
                localStorage.setItem("cryptoData", JSON.stringify(cachedData));
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        // Check if cached data is available and not older than 5 minutes
        const cachedDataString = localStorage.getItem("cryptoData");

        if (cachedDataString) {
            const cachedData = JSON.parse(cachedDataString);
            const currentTime = new Date().getTime();
            const timeDiff = (currentTime - cachedData.timestamp) / (1000 * 60); // Calculate time difference in minutes
            if (timeDiff <= 5) {
                // Use cached data if it's not older than 5 minutes
                setAllData(cachedData.data);
                return;
            }
        }

        // Fetch fresh data if there's no cached data or if it's older than 5 minutes
        fetchData();
    }, []);

    return allData;
}