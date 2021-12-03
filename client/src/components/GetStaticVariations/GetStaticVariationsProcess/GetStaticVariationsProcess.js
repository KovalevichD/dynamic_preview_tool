import React from "react";
import {Typography, Button, Space} from 'antd';
import {createAllVariationsAPI} from "../../../api/api";

const {Text} = Typography;

const GetStaticVariationsProcess = (props) => {
    const numberOfSizes = Object.keys(props.creatives).length;
    const numberOfAllVariations = props.snippets.size;
    const numberOfCreatives = props.snippets.size * numberOfSizes;

    const onClick = async () => {
        const snippetsObj = Object.fromEntries(props.snippets);

        const res = await createAllVariationsAPI.createVariations(snippetsObj)

        console.log(res.data.message)
    }

    return (
        <Space direction="vertical">
            <Text strong>You uploaded {numberOfSizes} sizes.</Text>
            <Text strong>The number of all static variations is {numberOfAllVariations}</Text>
            <Text strong>The number of all creatives is {numberOfCreatives}</Text>
            <Button type="primary" onClick={onClick}>MAKE ALL VARIATIONS</Button>
        </Space>
    )
}

export default GetStaticVariationsProcess;