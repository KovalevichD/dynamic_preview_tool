import React from 'react';
import {Layout} from 'antd';
import {LinkedinFilled, GithubFilled, MailOutlined} from '@ant-design/icons';

const {Footer} = Layout;

const FooterSection = () => {
    return (
        <Footer style={{textAlign: 'center'}}>
            Preview Tool ©2021 Created by Dmitry Kovalevich
            <a href={'https://www.linkedin.com/in/dmitry-kovalevich/'}>
                <LinkedinFilled style={{fontSize: '20px', marginLeft: '15px'}}/>
            </a>
            <a href={'https://github.com/KovalevichD'}>
                <GithubFilled style={{fontSize: '20px', marginLeft: '10px'}}/>
            </a>
            <a href={'https://google.com/'}>
                <MailOutlined style={{fontSize: '20px', marginLeft: '10px'}}/>
            </a>
        </Footer>
    );
}

export default FooterSection;