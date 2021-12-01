import React, {useEffect, useState} from 'react';
import {Redirect} from "react-router-dom";
import ChangeSpreadsheetLink from "./ChangeSpreadsheetLink/ChangeSpreadsheetLink";
import ProvideSpreadsheetLink from "./ProvideSpreadsheetLink/ProvideSpreadsheetLink";
import {message} from 'antd';

const GetSheetInfo = (props) => {
    const [redirect, setRedirect] = useState(false);
    const [isDisable, setIsDisable] = useState(props.spreadsheetName);

    useEffect(() => {
        setIsDisable(props.spreadsheetName)
    }, [props.spreadsheetName])

    const onClick = async () => {
        await props.getSheetList(props.urlInputText)

        message.success('Information about spreadsheet loaded successfully!')
        setRedirect(true)
    }

    if (redirect) {
        return <Redirect to='/uploadGs/step_1'/>;
    }

    return (
        <>
            {
                isDisable
                    ? <ChangeSpreadsheetLink spreadsheetName={props.spreadsheetName}
                                             spreadsheetUrl={props.spreadsheetUrl}
                                             resetData={props.resetData}
                                             resetGsData={props.resetGsData}/>
                    : <ProvideSpreadsheetLink urlInputText={props.urlInputText}
                                              onClick={onClick}
                                              updateUrlInputText={props.updateUrlInputText}
                                              isFetching={props.isFetching}/>
            }
        </>
    );
}

export default GetSheetInfo;