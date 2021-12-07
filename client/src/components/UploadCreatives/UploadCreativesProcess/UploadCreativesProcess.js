import React from 'react';
import {Spin} from 'antd';
import DragField from "./DragField/DragField";
import UploadedCreativesList from "./UploadedCreativesList/UploadedCreativesList";
import CreativesToUploadList from "./CreativesToUploadList/CreativesToUploadList";

const UploadCreativesProcess = (props) => {
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
                    clearAllVariationsDirectory={props.clearAllVariationsDirectory}
                    deleteFiles={props.deleteFiles}
                    toggleIsFetching={props.toggleIsFetching}
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
                    uploadFiles={props.uploadFiles}
                    filesToUpload={props.filesToUpload}
                    toggleIsFetching={props.toggleIsFetching}
                />
            }
        </Spin>
    );
}

export default UploadCreativesProcess;