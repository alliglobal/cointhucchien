
import "./CryptoNewsCard.css";
import { Space, Tag, Image } from 'antd';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Chip from '@mui/material/Chip';
import {UnixTimeConvert} from "../../ToolsFunctions/UnixTime.jsx";

function CryptoNewsCard({ data }) {

    const keywords = data.categories.includes("|") ? data.categories.split("|") : [data.categories];

    return (
        <a href={data.guid} target={"_blank"} rel={"noreferrer"} className={"news--card"}>

            <div className={'relative'}>
                <p className={"timestamp"}>{UnixTimeConvert(data.published_on)}</p>
            </div>

            <div className={"p-3 flex items-center gap-3 shadow-md bg-neutral-50 hover:bg-neutral-100 mb-3 rounded-lg news--responsive"}>
                <img className={"lg:w-40 rounded-md img--responsive"} src={data.imageurl} alt={data.title} />

                <div className={"flex-col"}>

                    <Space size={[0, 8]} wrap className={"flex mb-2"} style={{ rowGap: "5px", columnGap: "5px" }}>
                        {keywords.map((keyword, index) => (
                            <Chip key={index} color="primary" variant="outlined" label={keyword.toUpperCase()} size="small" />
                        ))}
                    </Space>
                    <h1 className={"font-bold text-2xl"}>{data.title}</h1>
                    <p className={"text-gray-400 font-light"}>- {data.body.split(" ").splice(0, 50).join(" ")}</p>

                </div>
            </div>
        </a>

    );
}

export default CryptoNewsCard;
