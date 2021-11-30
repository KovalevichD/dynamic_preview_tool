import React from 'react';
import {Result, Button} from 'antd';
import {DownloadOutlined, EditOutlined} from "@ant-design/icons";

const UploadResult = () => {

    return (
        <>
            <Result
                status="success"
                title="Successfully Uploaded Creatives!"
                subTitle="Make sure you have loaded and configured dynamic data. And then you can get static versions of your dynamic creatives. You can also view all versions in the Preview section."
                extra={[
                    <Button type="primary" key="console"><DownloadOutlined/>LOAD DYNAMIC DATA</Button>,
                    <Button key="buy" type="primary" ghost><EditOutlined/>RESET UPLOADED CREATIVES</Button>,
                ]}
            />
        </>
    );
}

export default UploadResult;