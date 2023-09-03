
import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import StockCardDisplay from "./StockCardDisplay.jsx";
import "./StockBody.css";

function StockBody({cryptoDatas}) {

    const itemCard = cryptoDatas.map((items,index) => {
        return <StockCardDisplay key={index}
                                 id={items.id}
                                 name={items.name}
                                 symbol={items.symbol.toUpperCase()}
                                 price={items.current_price.toLocaleString()}
                                 percent={items.price_change_percentage_24h.toFixed(2)}
                                 image={items.image}

        />
    })

    const responsive = {
        0: {
            items: 1,
            stagePadding: {
                paddingLeft: 20,
                paddingRight: 20,
            },
        },
        512: {
            items: 1,
            stagePadding: {
                paddingLeft: 10,
                paddingRight: 10,
            },
        },

        1225: {
            items: 3    ,
            stagePadding: {
                paddingLeft: 10,
                paddingRight: 10,
            },
        },
        1400: {
            items: 4,
            stagePadding: {
                paddingLeft: 10,
                paddingRight: 10,
            },
        },
    };

    return (
        <div className={"p-2 flex justify-center stock--width"}>
            <AliceCarousel
                mouseTracking
                infinite
                disableDotsControls
                disableButtonsControls
                items={itemCard}
                responsive={responsive}
                autoPlay
                autoPlayInterval={500} // Adjust this value to control autoplay speed (e.g., 3000ms for 3 seconds)
                animationDuration={1000} // Adjust this value to control the animation speed (e.g., 800ms)
            />
        </div>
    );
}

export default StockBody;
