import React from 'react';
import {Button, Space} from 'antd';
import ListOfCreatives from "../ListOfCreatives/ListOfCreatives";
import {Link} from "react-router-dom";

const CreativesToUploadList = (props) => {

    return (
        <><Space style={{margin: '20px 0 0 20px'}}>
            <Link to='/uploadCreatives/result'>
                <Button onClick={props.onClick}
                        loading={props.isFetching}
                        type="primary">UPLOAD TO THE SERVER
                </Button>
            </Link>
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