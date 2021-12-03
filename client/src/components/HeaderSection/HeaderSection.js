import React from 'react';
import {Layout} from 'antd';
import NavbarSectionContainer from "./NavbarSection/NavbarSectionContainer";
import {NavLink} from "react-router-dom";

const {Header} = Layout;

const HeaderSection = (props) => {
    return (
        <Header style={{height: '50px', lineHeight: '50px'}}>
            <div style={{maxWidth: '990px', margin: '0 auto', height: '50px'}}>
                <NavLink to="/">
                    <div className="logo"/>
                </NavLink>
                <NavbarSectionContainer/>
            </div>
        </Header>
    );
}

export default HeaderSection;