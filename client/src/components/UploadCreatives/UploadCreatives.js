import React from 'react';
import {Route} from "react-router-dom";
import UploadCreativesProcessContainer from "./UploadCreativesProcess/UploadCreativesProcessContainer";
import UploadResult from "./UploadResult/UploadResult";

const UploadCreatives = () => {
    return (
        <>
            <Route exact path={'/uploadCreatives'} render={() => <UploadCreativesProcessContainer/>}/>
            <Route exact path={'/uploadCreatives/result'} render={() => <UploadResult/>}/>
        </>
    );
}

export default UploadCreatives;