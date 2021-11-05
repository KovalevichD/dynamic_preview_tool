import React, {useEffect, useState} from 'react';
import {getSheetsList} from "../../../api/api";
import {Redirect} from "react-router-dom";
import ChangeSpreadsheetLink from "./ChangeSpreadsheetLink/ChangeSpreadsheetLink";
import ProvideSpreadsheetLink from "./ProvideSpreadsheetLink/ProvideSpreadsheetLink";
import { message } from 'antd';

const GetSheetInfo = (props) => {
    const [redirect, setRedirect] = useState(false);
    const [isDisable, setIsDisable] = useState(props.spreadsheetName);

    useEffect(() => {
        setIsDisable(props.spreadsheetName)
    }, [props.spreadsheetName])

    const onClick = async () => {
        props.toggleIsFetching(true)
        const spreadsheetInfo = await getSheetsList(props.urlInputText) //TODO! handle request error

        props.setSheetInfo(spreadsheetInfo.data.spreadsheetInfo)
        props.toggleIsFetching(false)
        message.success('Information about spreadsheet loaded successfully!')
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
            {
                isDisable
                    ? <ChangeSpreadsheetLink spreadsheetName={props.spreadsheetName}
                                             spreadsheetUrl={props.spreadsheetUrl}
                                             resetData={props.resetData}/>
                    : <ProvideSpreadsheetLink urlInputText={props.urlInputText} onChange={onChange} onClick={onClick}
                                              isFetching={props.isFetching}/>
            }
        </>
    );
}

export default GetSheetInfo;