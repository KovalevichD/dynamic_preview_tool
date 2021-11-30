import React from 'react';
import {Menu} from 'antd';
import {
    BarChartOutlined,
    SaveOutlined,
    FundViewOutlined,
    HomeOutlined,
    DatabaseOutlined,
    UploadOutlined
} from '@ant-design/icons';
import {NavLink} from "react-router-dom";

const {SubMenu} = Menu;


const NavbarSection = (props) => {
    return (
        <Menu style={{backgroundColor: 'none'}} mode="horizontal" theme="dark">
            <Menu.Item key="1" icon={<HomeOutlined/>}>
                <NavLink to="/">HOME</NavLink>
            </Menu.Item>
            <Menu.Item key="2" icon={<UploadOutlined/>}>
                <NavLink to="/uploadCreatives/">LOAD YOUR CREATIVES</NavLink>
            </Menu.Item>
            <SubMenu key="sub1" icon={<BarChartOutlined/>} title="CREATE DC">
                <Menu.Item key="3"><NavLink to="/uploadGs/step_0">Upload Google Spreadsheets</NavLink></Menu.Item>
                <Menu.Item key="4">Upload CSV</Menu.Item>
                <Menu.Item key="5">Upload .json File</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" disabled={ !props.isDataReady || !props.isCreativesReady} icon={<SaveOutlined/>} title="SAVE CREATIVES">
                <Menu.Item key="6">Get all versions</Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" disabled={!props.isDataReady || !props.isCreativesReady} icon={<FundViewOutlined/>} title="PREVIEW">
                <Menu.Item key="7">option9</Menu.Item>
            </SubMenu>
            <SubMenu key="sub4" disabled={!props.isDataReady} icon={<DatabaseOutlined/>} title="DATA">
                <Menu.Item key="8">Get JSON File</Menu.Item>
                <Menu.Item key="9">Edit Data</Menu.Item>
                <Menu.Item key="10">Reset Data</Menu.Item>
            </SubMenu>
        </Menu>
    );
}

export default NavbarSection;