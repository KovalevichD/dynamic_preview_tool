import React, {useState} from 'react';
import {Steps} from 'antd';

const {Step} = Steps;

const Progress = (props) => {
    const initialStep = 0
    const [current, setCurrent] = useState(initialStep)

    const onChange = (currentStep) => {
        setCurrent(currentStep)

        switch (currentStep) {
            case 0:
                props.history.push('/uploadGs/loadSpreadsheetInfo');
                break;
            case 1:
                props.history.push('/uploadGs/chooseSheets');
                break;
            case 2:
                props.history.push('/uploadGs/setTypes');
                break;
            default:
                return;
        }
    }

    return (
        <Steps current={current} responsive={true} onChange={onChange}>
            <Step title='Load spreadsheet info'/>
            <Step disabled={!props.totalListOfSheetsLength} title='Choose sheets to load'/>
            <Step disabled={!props.sheetDataLength} title='Set up the code snippet'/>
        </Steps>
    );
}

export default Progress;