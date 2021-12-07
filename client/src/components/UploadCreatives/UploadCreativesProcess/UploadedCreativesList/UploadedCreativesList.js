import React from 'react';
import {Button, Modal, notification} from 'antd';
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
            onOk: async () => {
                // props.resetFiles();
                try {
                    await props.deleteFiles();
                    notification.success({
                        message: 'Success!',
                        description:
                            'The data has been reset.',
                        placement: 'bottomRight'
                    });
                } catch (e) {
                    props.toggleIsFetching(false);

                    notification.error({
                        message: 'Error!',
                        description:
                            'Couldn\'t delete the data. Please try again.',
                        placement: 'bottomRight'
                    });
                }
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