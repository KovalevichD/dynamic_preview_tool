import React from 'react';
import {Menu} from 'antd';
import {BarChartOutlined, SaveOutlined, FundViewOutlined, HomeOutlined, DatabaseOutlined} from '@ant-design/icons';
import {NavLink} from "react-router-dom";

const {SubMenu} = Menu;


const NavbarSection = (props) => {

    return (
            <Menu style={{backgroundColor: 'none'}}
                // mode="inline"
                mode="horizontal"
                  theme="dark"
                // defaultSelectedKeys={['1']}
                // defaultOpenKeys={['sub1']}
                // style={{borderRight: 0}}
            >
                <Menu.Item key="1" icon={<HomeOutlined/>}>
                    <NavLink to="/">Start Page</NavLink>
                </Menu.Item>
                <SubMenu key="sub1" icon={<BarChartOutlined/>} title="Create Dynamic Content">
                    <Menu.Item key="2"><NavLink to="/uploadGs/step_0">Upload Google Spreadsheets</NavLink></Menu.Item>
                    <Menu.Item key="3">Upload CSV</Menu.Item>
                    <Menu.Item key="4">Upload .json File</Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" disabled={!props.isDataReady} icon={<SaveOutlined/>} title="Save Your Creatives">
                    <Menu.Item key="5">option5</Menu.Item>
                    <Menu.Item key="6">option6</Menu.Item>
                    <Menu.Item key="7">option7</Menu.Item>
                    <Menu.Item key="8">option8</Menu.Item>
                </SubMenu>
                <SubMenu key="sub3" disabled={!props.isDataReady} icon={<FundViewOutlined/>} title="Dynamic Preview">
                    <Menu.Item key="9">option9</Menu.Item>
                    <Menu.Item key="10">option10</Menu.Item>
                    <Menu.Item key="11">option11</Menu.Item>
                    <Menu.Item key="12">option12</Menu.Item>
                </SubMenu>
                <SubMenu key="sub4" disabled={!props.isDataReady} icon={<DatabaseOutlined />} title="Loaded Data">
                    <Menu.Item key="13">Get JSON File</Menu.Item>
                    <Menu.Item key="14">Edit Data</Menu.Item>
                    <Menu.Item key="15">Reset Data</Menu.Item>
                </SubMenu>
            </Menu>
    );
}

export default NavbarSection;