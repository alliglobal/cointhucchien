

import { useEffect, useState } from "react";

export function CryptoDetailFetch({cryptoID}) {
    const [CryptoDetail, setCryptoDetail] = useState([]);
    const apiUrl = `https://api.coingecko.com/api/v3/coins/${cryptoID}?localization=false&tickers=true&market_data=true&community_data=true&developer_data=true&sparkline=true`;

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(apiUrl);
                if (!response.ok) {
                    throw new Error(`Fetch failed with status ${response.status}`);
                }
                const data = await response.json();
                setCryptoDetail(data);

            } catch (error) {
                console.error("Error fetching cryptocurrency news data:", error);
            }
        }

        fetchData();
    }, [cryptoID]);

    return CryptoDetail;
}
