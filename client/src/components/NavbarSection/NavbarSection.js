import React from 'react';
import {Layout, Menu} from 'antd';
import {BarChartOutlined, SaveOutlined, FundViewOutlined, HomeOutlined} from '@ant-design/icons';
import {NavLink} from "react-router-dom";

const {SubMenu} = Menu;
const {Sider} = Layout;

const NavbarSection = () => {

    return (
        <Sider width={280} style={{backgroundColor: 'transparent', paddingTop: '24px'}}>
            <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{borderRight: 0}}
            >
                <Menu.Item key="1" icon={<HomeOutlined/>}>
                    <NavLink to="/">Start Page</NavLink>
                </Menu.Item>
                <SubMenu key="sub1" icon={<BarChartOutlined/>} title="Create Dynamic Content">
                    <Menu.Item key="2"><NavLink to="/uploadGs/loadSpreadsheetInfo">Upload Google Spreadsheets</NavLink></Menu.Item>
                    <Menu.Item key="3">Upload CSV</Menu.Item>
                    <Menu.Item key="4">Upload .json File</Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" disabled={true} icon={<SaveOutlined/>} title="Save Your Creatives">
                    <Menu.Item key="5">option5</Menu.Item>
                    <Menu.Item key="6">option6</Menu.Item>
                    <Menu.Item key="7">option7</Menu.Item>
                    <Menu.Item key="8">option8</Menu.Item>
                </SubMenu>
                <SubMenu key="sub3" disabled={true} icon={<FundViewOutlined/>} title="Dynamic Preview">
                    <Menu.Item key="9">option9</Menu.Item>
                    <Menu.Item key="10">option10</Menu.Item>
                    <Menu.Item key="11">option11</Menu.Item>
                    <Menu.Item key="12">option12</Menu.Item>
                </SubMenu>
            </Menu>
        </Sider>
    );
}

export default NavbarSection;