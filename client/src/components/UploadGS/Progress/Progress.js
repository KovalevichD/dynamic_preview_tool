import React, {useState} from 'react';
import {Steps} from 'antd';

const {Step} = Steps;

const Progress = (props) => {
    const [current, setCurrent] = useState(0)

    const onChange = (currentStep) => {
        setCurrent(currentStep)
    }

    return (

        <Steps current={current} progressDot size="small" responsive={true} onChange={onChange}>
            <Step title="Load info" description="This is a description." />
            <Step title="Choose sheets to load" description="This is a description." />
            <Step title="Step 3" description="Setting up the code snippet." />
            <Step title="Step 4" description="Finish loading the code snippet." />
        </Steps>
    );
}

export default Progress;