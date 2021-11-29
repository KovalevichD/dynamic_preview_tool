import React from 'react';
import {message, Modal} from 'antd';
import ReactDOM from "react-dom";
import {ExclamationCircleOutlined} from "@ant-design/icons";

const CustomPrompt = (message,
                      callback,
                      confirmOpen,
                      setConfirmOpen) => {
    const {header, content} = JSON.parse(message);
    const container = document.createElement("div");

    container.setAttribute("custom-confirm-view", "");

    const handleConfirm = (callbackState) => {
        ReactDOM.unmountComponentAtNode(container);
        callback(callbackState);
        setConfirmOpen(false);
        // props.resetFilesToLoad()
    };

    const handleCancel = (callbackState) => {
        ReactDOM.unmountComponentAtNode(container);
        callback();
        setConfirmOpen(false);
    };

    ReactDOM.render(
        <Modal
            title={header}
            content={content}
            icon={<ExclamationCircleOutlined/>}
            centered
            visible={confirmOpen}
            okText='Continue'
            cancelText='Cancel'
            onOk={handleConfirm}
            onCancel={handleCancel}
        >
            <p>{content}</p>
        </Modal>,
        container
    );
};

export default CustomPrompt;