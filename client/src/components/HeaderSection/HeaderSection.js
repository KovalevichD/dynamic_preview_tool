import React from 'react';
import {Layout} from 'antd';
import NavbarSectionContainer from "./NavbarSection/NavbarSectionContainer";

const {Header} = Layout;

const HeaderSection = (props) => {
    return (
        <Header>
            <div style={{maxWidth: '960px', margin: '0 auto'}}>
                {/*<div className="logo"/>*/}
                <NavbarSectionContainer/>
            </div>
        </Header>
    );
}

export default HeaderSection;