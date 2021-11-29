import React from 'react';
import {Button, Space, Spin} from 'antd';
import axios from 'axios';
import ListToUpload from "./ListToUpload/ListToUpload";
import DragField from "./DragField/DragField";
// import {Prompt} from "react-router-dom";

const UploadCreatives = (props) => {

    const onClick = async () => {
        props.toggleIsFetching(true);
        const fmData = new FormData();

        for (let i = 0; i < props.filesToUpload.length; i++) {
            fmData.append("files", props.filesToUpload[i]);
            fmData.append("webkitRelativePath", props.filesToUpload[i].webkitRelativePath);
        }

        const res = await axios.post(
            "/uploadCreatives/upload",
            fmData,
            {headers: {"content-type": "multipart/form-data"}}
        );

        console.log(res);
        props.toggleIsFetching(false);
        props.resetFilesToLoad()
    }

    return (
        <>
            {
                props.filesToUpload.length !== props.amountOfFilesToLoad && <DragField
                    addFileToLoad={props.addFileToLoad}
                    setAmountOfFilesToLoad={props.setAmountOfFilesToLoad}/>
            }
            {
                props.filesToUpload.length !== 0 &&
                <Spin size="large" spinning={props.isFetching} tip="Uploading creatives to the server..." delay={500}>
                    <Space style={{margin: '20px 0 0 20px'}}>
                        <Button onClick={onClick}
                                loading={props.isFetching}
                                type="primary">UPLOAD TO THE SERVER
                        </Button>
                        <Button onClick={() => props.resetFilesToLoad()}
                                type="primary"
                                ghost>CHOOSE ANOTHER FOLDER
                        </Button>
                    </Space>
                    <ListToUpload filesInFolders={props.filesInFolders} removeFilesToLoad={props.removeFilesToLoad}/>
                </Spin>
            }
            {/*<Prompt message={JSON.stringify({*/}
            {/*    header: 'Warning!',*/}
            {/*    content: 'You will lose the downloaded data if you leave the page'*/}
            {/*})} when={props.filesToUpload.length > 0} resetFilesToLoad={props.resetFilesToLoad}/>*/}
        </>
    );
}

export default UploadCreatives;