import {Button, notification, Typography, Space} from "antd";
import React from "react";
import {createAllVariationsAPI} from "../../../../api/api";
import fileDownload from "js-file-download";

const {Text} = Typography;

const DownloadArchive = (props) => {
    const download = async () => {
        try {
            const file = await createAllVariationsAPI.downloadArchive();

            fileDownload(file.data, 'creatives.zip');
        } catch (e) {
            notification.error({
                message: 'Error!',
                description:
                    'Failed to download an archive. Please try again.',
                placement: 'bottomRight'
            });
        }
    }
    return (
        <Space>
            <Text strong>{props.fileToDownloadName}</Text>
            <Button type="primary" onClick={download}>DOWNLOAD</Button>
        </Space>
    )
}

export default DownloadArchive;