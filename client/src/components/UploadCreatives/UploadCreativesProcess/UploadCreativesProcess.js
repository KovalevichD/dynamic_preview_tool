import React from 'react';
import {Spin} from 'antd';
import DragField from "./DragField/DragField";
import UploadedCreativesList from "./UploadedCreativesList/UploadedCreativesList";
import CreativesToUploadList from "./CreativesToUploadList/CreativesToUploadList";
import axios from "axios";


const UploadCreativesProcess = (props) => {
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

        props.toggleIsFetching(false);
        props.resetFiles();
        props.addFilesUploadedToServer(res.data.uploadedFiles);
        props.toggleIsCreativesReady(true)
    }
    return (
        <Spin size="large" spinning={props.isFetching} tip="Uploading creatives to the server...">
            {
                props.filesToUpload.length !== props.amountOfFilesToLoad
                && !props.isCreativesReady
                && <DragField
                    addFileToLoad={props.addFileToLoad}
                    setAmountOfFilesToLoad={props.setAmountOfFilesToLoad}
                />
            }
            {
                props.isCreativesReady
                && <UploadedCreativesList
                    filesInFolders={props.uploadedFiles}
                    uploadedFiles={props.uploadedFiles}
                    resetFiles={props.resetFiles}
                />
            }
            {
                props.filesToUpload.length !== 0
                && <CreativesToUploadList
                    filesInFolders={props.filesInFolders}
                    removeFilesToLoad={props.removeFilesToLoad}
                    uploadedFiles={props.uploadedFiles}
                    resetFiles={props.resetFiles}
                    isFetching={props.isFetching}
                    onClick={onClick}
                />
            }
        </Spin>
    );
}

export default UploadCreativesProcess;