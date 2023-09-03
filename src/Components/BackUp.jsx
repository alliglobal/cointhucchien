import {Space, Tag} from "antd";

<Space size={[0, 8]} wrap className={"mb-3"}>
    {keywords.map((keyword, index) => (
        <Tag key={index} color="success">
            {keyword.toUpperCase()}
        </Tag>
    ))}
</Space>