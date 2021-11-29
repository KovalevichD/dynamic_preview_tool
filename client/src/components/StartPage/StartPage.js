import React from 'react';
import {Typography} from 'antd';

const {Title} = Typography;

const StartPage = () => {

    return (
        <>
            <Title level={1} style={{textAlign: 'center'}}>Getting Started</Title>
            <Title level={2} style={{textAlign: 'center'}}>Getting Started with GS</Title>
            <Title level={3} style={{textAlign: 'center'}}>Getting Started with CSV</Title>
            <Title level={4} style={{textAlign: 'center'}}>Getting Started with JSON</Title>
        </>
    );
}

export default StartPage;