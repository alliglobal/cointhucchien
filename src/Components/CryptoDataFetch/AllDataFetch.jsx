
import { useEffect, useState } from "react";

export function AllDataFetch() {
    const [allData, setAllData] = useState([]);
    const apiUrl =
            // "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=800&page=1&sparkline=true&price_change_percentage=1h&locale=en";

            "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=true&price_change_percentage=1h&locale=en"; 

    const apiUrl2 =       
            "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=2&sparkline=true&price_change_percentage=1h&locale=en"; 

    const apiUrl3 =       
            "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=500&page=3&sparkline=true&price_change_percentage=1h&locale=en"; 

    const apiUrl4 =       
            "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=750&page=4&sparkline=true&price_change_percentage=1h&locale=en"; 

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(apiUrl);


                if (!response.ok) {
                    alert(`Error Fetching Crypto Data ${response.status}`);
                }

                // const response2 = await fetch(apiUrl2);

                
                // const data = await response.json();

                

                // more
                const response2 = await fetch(apiUrl2);

                if (!response2.ok) {
                    alert(`Error Fetching Crypto Data ${response2.status}`);
                }

                // const response3 = await fetch(apiUrl3);

                // if (!response3.ok) {
                //     alert(`Error Fetching Crypto Data ${response3.status}`);
                // }

                // const response4 = await fetch(apiUrl4);

                // if (!response4.ok) {
                //     alert(`Error Fetching Crypto Data ${response4.status}`);
                // }

                const data1 = await response.json();

                const data2 = await response2.json();

                // const data3 = await response3.json();

                // const data4 = await response4.json();
                
        
                // console.log("data1", data1);
                // console.log("data2", data2);

                const data = JSON.parse(JSON.stringify(data1));
                
                data.push(...data2);

                // data.push(...data3);

                // data.push(...data4);
                
                // console.log("ket qua",data);

                // const result = JSON.parse(JSON.stringify(response1));
                
                // result.push(...response2);
                
                // console.log("ket qua",result);

                // const merged = response2.map(item => {
                //     const resp1Item = response.find(r => r.id === item.id);
                  
                //     return { ...item,
                //       ...resp1Item
                //     }
                //   });
                  
                //   console.log("Combine",merged);
               

                // const data = Object.assign(data1, data2)
                // // const data = data1.conat 

                // const object1 = JSON.parse(JSON.stringify(data1));
                // console.log("cover data ", object1)

                // const object2 = JSON.parse(JSON.stringify(data2));

                //const object11 = JSON.parse(data1);
                //console.log("covert data 002", object11)

                // const object2 = JSON.parse(data2);

                // const data = {...object1,...object2};

                // console.log(result);

                // setAllData(result);

                // setAllData(data1);

                // TEST IT'S WORK
                // const response1 =    
                //      [{
                //         "id": 10896584,
                //         "recipient_id": "+393881903818",
                //         "delivery_status": "delivered",
                //         "verbose_delivery_status": "Delivered",
                //         "direction": "OUT",
                //         "country": "IT",
                //         "price": "0.000",
                //         "is_two_way": false,
                //         "receive_dlr": "",
                //         "webhook_url": "",
                //         "created_at": "2021-10-28T12:48:44+00:00"
                //     }];
                // // };
                
                // const response2 = 
                //      [{
                //         "id": 29384883,
                //         "recipient_id": "+393881903818",
                //         "delivery_status": "delivered",
                //         "verbose_delivery_status": "Delivered",
                //         "direction": "OUT",
                //         "country": "IT",
                //         "price": "0.000",
                //         "is_two_way": false,
                //         "receive_dlr": "",
                //         "webhook_url": "",
                //         "created_at": "2021-10-28T12:48:44+00:00"
                //     }];
            
             
                // const result = JSON.parse(JSON.stringify(response1));
                
                // result.push(...response2);
                
                // console.log("ket qua",result);

         
                setAllData(data)
            
                

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