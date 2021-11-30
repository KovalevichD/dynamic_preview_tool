import React from 'react';
import {Button, message, Modal} from 'antd';
import ListOfCreatives from "../ListOfCreatives/ListOfCreatives";
import {ExclamationCircleOutlined} from "@ant-design/icons";

const UploadedCreativesList = (props) => {

    const confirm = () => {
        Modal.confirm({
            title: 'Warning!',
            icon: <ExclamationCircleOutlined/>,
            content: 'You will lose the uploaded data',
            okText: 'Continue',
            cancelText: 'Cancel',
            onOk: () => {
                props.resetFiles();
                message.success('The data has been reset!');
            }
        });
    }

    return (
        <>
            <Button onClick={confirm}
                    style={{margin: '20px 0 0 20px'}}
                    type="primary"
            >UPLOAD AGAIN
            </Button>
            <ListOfCreatives filesInFolders={props.uploadedFiles}
                             uploadedFiles={props.uploadedFiles}/>
        </>
    );
}

export default UploadedCreativesList;