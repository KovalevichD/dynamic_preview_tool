import React from 'react';
import {Result, Button} from 'antd';
import {DownloadOutlined, HomeOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";

const UploadResult = () => {
    return (
        <>
            <Result
                status="success"
                title="Successfully Uploaded Creatives!"
                subTitle="You have just successfully uploaded creatives to the system.
                Your uploaded creatives will be used to create all the variations and to preview the dynamic company in the future.
                Tip: Now you can upload and configure dynamic data."
                extra={[
                    <Link key="showCreatives" to={'/uploadCreatives'}><Button type="primary"><DownloadOutlined/>Show Uploaded Creatives</Button></Link>,
                    <Link key="home" to={'/'}><Button type="primary" ghost><HomeOutlined/>GO TO HOME PAGE</Button></Link>
                ]}
            />
        </>
    );
}

export default UploadResult;