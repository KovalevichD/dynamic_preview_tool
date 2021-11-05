import React from 'react';
import {Layout} from 'antd';
import {CheckSquareOutlined} from '@ant-design/icons';

const {Header} = Layout;

const HeaderSection = (props) => {
    return (
        <Header>
            <div className="logo"/>
            <div>
                {
                    props.spreadsheetName && <span style={{
                        color: '#fff',
                        marginLeft: '20px',
                        height: 'auto'
                    }}>Spreadsheet: {props.spreadsheetName}</span>
                }
                {
                    props.listOfSheetsToUpload.length > 0 && <span style={{
                        color: '#fff',
                        marginLeft: '20px',
                        height: 'auto'
                    }}>Sheet name: {props.listOfSheetsToUpload.join(', ')}</span>
                }
                {
                    props.isDataReady && <CheckSquareOutlined style={{ fontSize: '25px', color: '#52c41a', marginLeft: '200px' }}/>
                }
            </div>
        </Header>
    );
}

export default HeaderSection;