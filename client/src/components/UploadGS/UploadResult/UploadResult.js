import React from 'react';
import {Result, Button} from 'antd';

const UploadResult = (props) => {

    return (
        <>
            <Result
                status="success"
                title="Successfully Built Dynamic Snippets!"
                subTitle="Now you can get static versions of your dynamic creatives. You can also view all versions in the Preview section."
                extra={[
                    <Button type="primary" key="console">Go To Preview</Button>,
                    <Button key="buy">Build Again</Button>,
                ]}
            />
        </>
    );
}

export default UploadResult;