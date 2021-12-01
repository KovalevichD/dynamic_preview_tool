import React, {useEffect, useState} from 'react';
import ChangeSpreadsheetLink from "./ChangeSpreadsheetLink/ChangeSpreadsheetLink";
import ProvideSpreadsheetLink from "./ProvideSpreadsheetLink/ProvideSpreadsheetLink";

const GetSheetInfo = (props) => {
    const [isDisable, setIsDisable] = useState(props.spreadsheetName);

    useEffect(() => {
        setIsDisable(props.spreadsheetName)
    }, [props.spreadsheetName])

    return (
        <>
            {
                isDisable
                    ? <ChangeSpreadsheetLink spreadsheetName={props.spreadsheetName}
                                             spreadsheetUrl={props.spreadsheetUrl}
                                             resetData={props.resetData}
                                             resetGsData={props.resetGsData}/>
                    : <ProvideSpreadsheetLink urlInputText={props.urlInputText}
                                              toggleIsFetching={props.toggleIsFetching}
                                              getSheetList={props.getSheetList}
                                              updateUrlInputText={props.updateUrlInputText}
                                              isFetching={props.isFetching}/>
            }
        </>
    );
}

export default GetSheetInfo;