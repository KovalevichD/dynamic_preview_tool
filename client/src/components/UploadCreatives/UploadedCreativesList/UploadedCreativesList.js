import React from 'react';
import {Button} from 'antd';
import ListOfCreatives from "../ListOfCreatives/ListOfCreatives";

const UploadedCreativesList = (props) => {

    return (
        <>
            <Button onClick={() => props.resetFiles()}
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