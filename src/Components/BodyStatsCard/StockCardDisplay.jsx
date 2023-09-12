
import { FaArrowTrendUp, FaArrowTrendDown } from "react-icons/fa6";
import "./StockCardDisplay.css"
import {Avatar} from "@mui/joy";
import { useNavigate } from 'react-router-dom';

function StockCardDisplay({id, name, symbol, image, price, percent}){

    const navigate = useNavigate();
    const onStockClick = (id) => {
        navigate(`/detail/${id}`);
    };

    return (
        <div onClick={() => onStockClick(id)} key={id} id={id} className={"shadow flex justify-around items-center card--width bg-blue-500 cursor-pointer p-2 rounded-md lg:m-1.5 m-1.5 displaycard--hover"}>
            <div className={"flex items-center gap-2"}>
                <Avatar alt="Remy Sharp" src={image} />

                <div className={""}>
                    <h2 className={"text-white font-bold text-2xl"}>{name.split(" ").slice(0,1)}</h2>
                    <p className={"text-white text-1xl"}>{symbol}</p>
                </div>
            </div>
            <div className={""}>
                <h1 className={"text-white  font-bold lg:text-3xl text-2xl text-right"}>${price}</h1>

                <div className={"flex gap-2"}>
                    {percent < 0 ?
                        <FaArrowTrendDown style={{color: "FF6666", fontSize:"2rem"}} />
                        :
                        <FaArrowTrendUp style={{color: "rgb(134 239 172)", fontSize:"2rem"}} />

                    }
                    <p className={`${percent < 0 ? "down" : "text-green-300"} text-2xl`}>{percent}%</p>
                </div>
            </div>
        </div>
    )

}

export default StockCardDisplay;