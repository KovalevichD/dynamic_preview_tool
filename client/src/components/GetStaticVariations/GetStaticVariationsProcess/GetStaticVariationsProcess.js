import React from "react";
import {Typography, Button, Space} from 'antd';
import {createAllVariationsAPI} from "../../../api/api";
import fileDownload from 'js-file-download';

const {Text} = Typography;

const GetStaticVariationsProcess = (props) => {
    const numberOfSizes = Object.keys(props.creatives).length;
    const numberOfAllVariations = props.snippets.size;
    const numberOfCreatives = props.snippets.size * numberOfSizes;

    const onClick = async () => {//TODO handle errors
        const snippetsObj = Object.fromEntries(props.snippets);

        const res = await createAllVariationsAPI.createVariations(snippetsObj)

        console.log(res.data.message)
    }

    const download = async () => {//TODO handle errors
        try {
            const file = await createAllVariationsAPI.downloadArchive();

            fileDownload(file.data, 'creatives.zip')
        } catch (e) {
            console.log(e)
        }

    }

    return (
        <Space direction="vertical">
            <Text strong>You uploaded {numberOfSizes} sizes.</Text>
            <Text strong>The number of all static variations is {numberOfAllVariations}</Text>
            <Text strong>The number of all creatives is {numberOfCreatives}</Text>
            <Button type="primary" onClick={onClick}>MAKE ALL VARIATIONS</Button>
            <Button type="primary" onClick={download}>download</Button>
        </Space>
    )
}

export default GetStaticVariationsProcess;