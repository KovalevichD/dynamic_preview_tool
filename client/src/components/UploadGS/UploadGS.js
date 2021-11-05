import React from 'react';
import {Route} from "react-router-dom";
import ShowSheetsDataContainer from "./ShowSheetsData/ShowSheetsDataContainer";
import GetSheetInfoContainer from "./GetSheetsInfo/GetSheetInfoContainer";
import ChooseSheetContainer from "./ChooseSheet/ChooseSheetContainer";
import ProgressContainer from "./Progress/ProgressContainer";

const UploadGS = (props) => {

    return (
        <>
            <div style={{padding: '24px'}}>
                <Route path={'/uploadGs/'} render={({history}) => <ProgressContainer history={history}/>}/>
                <Route exact path={'/uploadGs/loadSpreadsheetInfo'} render={() => <GetSheetInfoContainer />}/>
                <Route exact path={'/uploadGs/chooseSheets'} render={() => <ChooseSheetContainer />}/>
                <Route exact path={'/uploadGs/setTypes'} render={() => <ShowSheetsDataContainer />}/>
            </div>
        </>
    );
}

export default UploadGS;