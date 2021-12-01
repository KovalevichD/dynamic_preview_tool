import React from 'react';
import {Button, notification, Space} from 'antd';
import ListOfCreatives from "../ListOfCreatives/ListOfCreatives";
import {useHistory} from "react-router-dom";

const CreativesToUploadList = (props) => {
    const history = useHistory();

    const onClick = async () => {
        try {
            await props.uploadFiles(props.filesToUpload);

            history.push('/uploadCreatives/result');

            notification.success({
                message: 'Success!',
                description:
                    'Creatives have been successfully uploaded.',
                placement: 'bottomRight'
            });
        } catch (e) {
            props.toggleIsFetching(false);

            notification.error({
                message: 'Error!',
                description:
                    'Failed to upload files to the server. Please try again.',
                placement: 'bottomRight'
            });
        }
    }

    return (
        <><Space style={{margin: '20px 0 0 20px'}}>
            <Button onClick={onClick}
                    loading={props.isFetching}
                    type="primary">UPLOAD TO THE SERVER
            </Button>
            <Button onClick={() => props.resetFiles()}
                    type="primary"
                    ghost>REMOVE ALL
            </Button>
        </Space>
            <ListOfCreatives filesInFolders={props.filesInFolders}
                             removeFilesToLoad={props.removeFilesToLoad}
                             uploadedFiles={props.uploadedFiles}
            />
        </>

    );
}

export default CreativesToUploadList;