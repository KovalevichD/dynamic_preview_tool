import React from 'react';
import {message, Typography, Button, Modal} from 'antd';
import {ExclamationCircleOutlined, CheckSquareOutlined} from '@ant-design/icons';

const {Title, Paragraph, Link} = Typography;

const ChangeSpreadsheetLink = (props) => {

    const confirm = () => {
        Modal.confirm({
            title: 'Warning!',
            icon: <ExclamationCircleOutlined/>,
            content: 'You will lose the downloaded data',
            okText: 'Continue',
            cancelText: 'Cancel',
            onOk: () => {
                props.resetData();
                message.success('The data has been reset!');
            }
        });
    }

    return (
        <>
            <Title level={4} style={{textAlign: 'left', marginTop: '50px'}}>
                You have already provided a link to the spreadsheet
                <CheckSquareOutlined style={{fontSize: '25px', color: '#52c41a', marginLeft: '8px'}}/>
            </Title>

            <Paragraph>You are currently working with a <Link href={props.spreadsheetUrl}
                                                              strong={true}
                                                              target="_blank">{props.spreadsheetName}</Link>spreadsheet.
            </Paragraph>

            <Button onClick={confirm} type="primary">Change the spreadsheet</Button>
        </>
    );
}

export default ChangeSpreadsheetLink;