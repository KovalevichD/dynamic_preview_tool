import React from 'react';
import {Upload, Button} from 'antd';
import {InboxOutlined} from '@ant-design/icons';
import axios from 'axios';

const {Dragger} = Upload;

const UploadCreatives = () => {
    const filesArray = [];

    const onClick = async () => {
        const fmData = new FormData();

        for (let i = 0; i < filesArray.length; i++) {
            fmData.append("files", filesArray[i]);
            fmData.append("webkitRelativePath", filesArray[i].webkitRelativePath);
        }

        const res = await axios.post(
            "/uploadCreatives/upload",
            fmData,
            {headers: {"content-type": "multipart/form-data"}}
        );

        console.log(res);
    }
    const beforeUpload = async (file, files) => {
        filesArray.push(file)
        return false;
    }

    return (
        <>
            <Dragger name='file'
                     accept='image/*,.css,.js,.html,.woff2,.woff,.mp4,.ogv,.webp'
                     showUploadList={false}
                     multiple={true}
                     directory={true}
                // defaultFileList={fileList}
                     beforeUpload={beforeUpload}
            >
                <p className="ant-upload-drag-icon">
                    <InboxOutlined/>
                </p>
                <p className="ant-upload-text">Click or drag file to this area to upload</p>
                <p className="ant-upload-hint">
                    Support for a single or bulk upload. Strictly prohibit from uploading company data or other
                    band files
                </p>
            </Dragger>
            <Button onClick={onClick}
                // loading={props.isFetching}
                    type="primary"
                    style={{marginLeft: '20px'}}>UPLOAD</Button>
        </>
    );
}

export default UploadCreatives;