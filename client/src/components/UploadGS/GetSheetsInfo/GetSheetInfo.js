import React, {useState} from 'react';
import {Typography, Button, Input} from 'antd';
import {getSheetsList} from "../../../api/api";
import {Redirect} from "react-router-dom";

const {Title} = Typography;

const GetSheetInfo = (props) => {
    const [redirect, setRedirect] = useState(false);

    const onClick = async () => {
        props.toggleIsFetching(true)
        const spreadsheetInfo = await getSheetsList(props.urlInputText)
        const {spreadsheetId, spreadsheetName, listOfSheets} = spreadsheetInfo.data.spreadsheetInfo

        props.toggleIsFetching(false)

        props.setSpreadSheetName(spreadsheetName)
        props.addTotalListOfSheets(listOfSheets)
        props.addListOfSheetsToUpload(listOfSheets)
        props.setSpreadSheetId(spreadsheetId)

        setRedirect(true)
    }

    const onChange = () => {
        const text = document.getElementById('input').value
        props.updateUrlInputText(text)
    }

    if (redirect) {
        return <Redirect to='/uploadGs/chooseSheets'/>;
    }

    return (
        <>
            <Title level={5} style={{textAlign: 'left', marginTop: '50px'}}>Select the content source data file you want
                to
                transform.</Title>
            <Input id={'input'}
                   onChange={onChange}
                   allowClear={true}
                   value={props.urlInputText}
                   placeholder="Spreadsheet URL"
                   style={{width: '50%'}}/>
            <Button onClick={onClick} loading={props.isFetching} type="primary" style={{marginLeft: '20px'}}>Load
                Sheet</Button>
        </>
    );
}

export default GetSheetInfo;