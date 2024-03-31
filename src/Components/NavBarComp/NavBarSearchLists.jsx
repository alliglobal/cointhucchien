
import {Avatar} from "@mui/joy";
import * as React from "react";
import "./NavBarSearchLists.css"
import {ShuffleData} from "../../ToolsFunctions/SortData.jsx";
import {useNavigate} from "react-router-dom";

function NavSearchUI(props){

    return (
        <div className={"mb-3 hover:cursor-pointer"} onClick={() => {props.clickSearch(props.symbol)}}>
            <div className={"flex items-center justify-between mb-1 hover:bg-gray-100 rounded-lg"}>

                <div className={"flex items-center gap-3"}>
                    <Avatar alt="Remy Sharp" src={props.img} sx={{ width: 40, height: 40 }}/>

                    <div className={"price--symbol"}>
                        <h1 className={"cryptoSearch--price font-semibold"}>{props.title}</h1>
                        <h1 className={"text-gray-400"}>{props.symbol}</h1>
                    </div>
                </div>

                <h1 className={"cryptoSearch--price"}>${props.price}</h1>
            </div>
            <hr></hr>
        </div>
    )
}

function NavBarSearchLists({searchDatas, closeSearchDraw}){

    const navigate = useNavigate();

    const onSearchClick = (id) => {
        navigate(`/detail/${id}`);
        closeSearchDraw();
    };

    if (searchDatas.length === 0) {
        return (
            <div className={"flex flex-col items-center justify-center h-60"}>
                <img src="/no-data.png" alt={"No results found"} className={"w-32"} />
                <div className="text-center">
                    <h2 className="mt-2 text-3xl font-extrabold text-gray-700">
                        No Results Found
                    </h2>
                    <p className="mt-2 text-sm text-gray-500">
                        We couldn&apos;t find any crypto matching your search.
                    </p>
                </div>
            </div>
        );
    }

    const SearchItems = searchDatas.map((items) => {

        return <NavSearchUI clickSearch={onSearchClick} key={items.id} id={items.id} title={items.name} symbol={items.symbol.toUpperCase()} price={items.current_price.toLocaleString()} img={items.image}/>
    })

    return (
        <ul className={""}>
            {SearchItems}
        </ul>
    )

}


export default NavBarSearchLists;
