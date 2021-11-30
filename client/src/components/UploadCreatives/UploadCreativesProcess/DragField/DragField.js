import React from 'react';
import {Upload, message} from 'antd';
import {InboxOutlined} from '@ant-design/icons';

const {Dragger} = Upload;

const DragField = (props) => {

    const customRequest = (info) => {
        info.file.webkitRelativePath !== info.file.name
            ? props.addFileToLoad(info.file)
            : message.error(`${info.file.name} file upload failed. Allowed only entire folder.`);
    }

    const onChange = (info) => {
        info.file === info.fileList[info.fileList.length - 1] && props.setAmountOfFilesToLoad(info.fileList.length)
    }

    return (
        <Dragger name='file'
                 style={{margin: '40px auto', maxWidth: '90%'}}
                 accept='image/*,.css,.js,.html,.woff2,.woff,.mp4,.ogv,.webp,.zip'
                 showUploadList={false}
                 customRequest={customRequest}
                 onChange={onChange}
                 multiple={true}
                 directory={true}
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
    );
}

export default DragField;