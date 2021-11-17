import React from 'react';
import {Button, Space} from 'antd';
import {CheckSquareOutlined, DownloadOutlined, EditOutlined, DeleteOutlined} from '@ant-design/icons';
import styles from './LoadedData.module.css';

const LoadedData = (props) => {
    return (
        <Space>
            <Space>
                <div style={{
                    fontSize: '13px',
                    textTransform: 'uppercase',
                    fontWeight: 'bold',
                    color: '#52c41a',
                    marginLeft: '10px'
                }}>Data is loaded
                    <CheckSquareOutlined style={{fontSize: '15px', color: '#52c41a', marginLeft: '5px'}}/>
                </div>
            </Space>
            <Space>
                <Button type="primary" size='small' ghost><DownloadOutlined /> GET JSON</Button>
                <Button type="primary" size='small' ghost><EditOutlined /> EDIT</Button>
                <Button type="primary" size='small' danger ><DeleteOutlined /> RESET</Button>
            </Space>
        </Space>
    );
}

export default LoadedData;