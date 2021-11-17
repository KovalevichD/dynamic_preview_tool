import React from 'react';
import {Result, Button} from 'antd';
import {DownloadOutlined, EditOutlined} from "@ant-design/icons";

const UploadResult = () => {

    return (
        <>
            <Result
                status="success"
                title="Successfully Built Dynamic Snippets!"
                subTitle="Now you can get static versions of your dynamic creatives. You can also view all versions in the Preview section."
                extra={[
                    <Button type="primary" key="console"><DownloadOutlined />GET JSON</Button>,
                    <Button key="buy" type="primary" ghost><EditOutlined />EDIT DATA</Button>,
                ]}
            />
        </>
    );
}

export default UploadResult;