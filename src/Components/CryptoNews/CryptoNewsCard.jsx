
import "./CryptoNewsCard.css"
import { Space, Tag, Image } from 'antd';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Chip from '@mui/material/Chip';

function CryptoNewsCard({data}){

    const keywords = data.keywords ? data.keywords.slice(0, 4) : [];

    return (
        <div className={""}>
            <Card sx={{ maxWidth: 340}} variant="outlined" className={"crypto-news-card"}>
                <CardActionArea sx={{height: 400}} className={"bg-blue-500"} >
                    <CardMedia
                        className={"max-h-56 card-media"}
                        component="img"
                        height="140"
                        image={data.image_url ? data.image_url : "/no-photo-available.png"}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Space size={[0, 8]} wrap className={"mb-3 flex"} style={{ rowGap: "5px", columnGap: "5px" }}>
                            {keywords.map((keyword, index) => (
                                <Chip key={index} color="primary" variant={"outlined"} label={keyword.toUpperCase()} size="small" />
                            ))}
                        </Space>

                        <Typography gutterBottom variant="h7" component="div" className={""}>
                            {data.title}
                        </Typography>

                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    )
}

export default CryptoNewsCard;
