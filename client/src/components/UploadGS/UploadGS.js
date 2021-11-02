import React from 'react';
import Progress from "./Progress/Progress";
import {Route} from "react-router-dom";
import ShowSheetsDataContainer from "./ShowSheetsData/ShowSheetsDataContainer";
import GetSheetInfoContainer from "./GetSheetsInfo/GetSheetInfoContainer";
import ChooseSheetContainer from "./ChooseSheet/ChooseSheetContainer";

const UploadGS = (props) => {
    return (
        <>
            <div style={{padding: '24px'}}>
                <Progress/>
                <Route exact path={'/uploadGs'} render={() => <GetSheetInfoContainer />}/>
                <Route exact path={'/uploadGs/chooseSheets'} render={() => <ChooseSheetContainer />}/>
                <Route exact path={'/uploadGs/getData'} render={() => <ShowSheetsDataContainer />}/>
            </div>
        </>
    );
}

export default UploadGS;