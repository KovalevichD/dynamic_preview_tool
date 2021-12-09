import React from "react";
import {Typography, Button, Space, notification} from 'antd';
import DownloadArchive from "./DownloadArchive/DownloadArchive";

const {Text} = Typography;

const GetStaticVariationsProcess = (props) => {
    const numberOfSizes = Object.keys(props.creatives).length;
    const numberOfAllVariations = props.snippets.size;
    const numberOfCreatives = props.snippets.size * numberOfSizes;

    const onClick = async () => {
        try {
            const snippetsObj = Object.fromEntries(props.snippets);

            await props.createAllVariations(snippetsObj);

            notification.success({
                message: 'Success!',
                description:
                    'All creative variations have been created.',
                placement: 'bottomRight'
            });
        } catch (e) {
            props.toggleIsFetching(false);

            notification.error({
                message: 'Error!',
                description:
                    'Failed to create all variations. Please try again.',
                placement: 'bottomRight'
            });
        }
    }

    return (
        // <Spin size="large" spinning={props.isFetching} tip="Creating variations...">
            <Space direction="vertical">
                <Text strong>You uploaded {numberOfSizes} sizes.</Text>
                <Text strong>The number of all static variations is {numberOfAllVariations}</Text>
                <Text strong>The number of all creatives is {numberOfCreatives}</Text>
                <Button type="primary" onClick={onClick}>MAKE ALL VARIATIONS</Button>
                {
                    props.isVariationsCreated && <DownloadArchive fileToDownloadName={props.fileToDownloadName}/>
                }
            </Space>
        // </Spin>
    )
}

export default GetStaticVariationsProcess;