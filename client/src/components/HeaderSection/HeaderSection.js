import React from 'react';
import {Layout} from 'antd';
import {CheckSquareOutlined} from '@ant-design/icons';
import LoadedData from "./LoadedData/LoadedData";

const {Header} = Layout;

const HeaderSection = (props) => {
    return (
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
            <div className="logo"/>
            <div>
                {
                    props.isDataReady && <LoadedData />
                }
            </div>
        </Header>
    );
}

export default HeaderSection;