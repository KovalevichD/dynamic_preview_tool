import React from 'react';
import {Route} from "react-router-dom";
import ShowSheetsDataContainer from "./ShowSheetsData/ShowSheetsDataContainer";
import GetSheetInfoContainer from "./GetSheetsInfo/GetSheetInfoContainer";
import ChooseSheetContainer from "./ChooseSheet/ChooseSheetContainer";
import ProgressContainer from "./Progress/ProgressContainer";

const UploadGS = () => {
    return (
        <>
            <div style={{padding: '24px'}}>
                <Route path={'/uploadGs/step_:step?'} render={() => <ProgressContainer />}/>
                <Route exact path={'/uploadGs/step_0'} render={() => <GetSheetInfoContainer />}/>
                <Route exact path={'/uploadGs/step_1'} render={() => <ChooseSheetContainer />}/>
                <Route exact path={'/uploadGs/step_2'} render={() => <ShowSheetsDataContainer />}/>
            </div>
        </>
    );
}

export default UploadGS;