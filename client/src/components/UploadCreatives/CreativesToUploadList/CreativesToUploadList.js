import React from 'react';
import {Button, Space} from 'antd';
import ListOfCreatives from "../ListOfCreatives/ListOfCreatives";

const CreativesToUploadList = (props) => {

    return (
        <><Space style={{margin: '20px 0 0 20px'}}>
            <Button onClick={props.onClick}
                    loading={props.isFetching}
                    type="primary">UPLOAD TO THE SERVER
            </Button>
            <Button onClick={() => props.resetFiles()}
                    type="primary"
                    ghost>CHOOSE ANOTHER FOLDER
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