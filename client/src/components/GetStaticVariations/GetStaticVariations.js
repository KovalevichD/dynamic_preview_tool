import React from 'react';
import {Route} from "react-router-dom";
import GetStaticVariationsProcessContainer from "./GetStaticVariationsProcess/GetStaticVariationsProcessContainer";

const GetStaticVariations = () => {
    return (
        <>
            <Route exact path={'/getStaticVariations'} render={() => <GetStaticVariationsProcessContainer/>}/>
            {/*<Route exact path={'/uploadCreatives/result'} render={() => <UploadResult/>}/>*/}
        </>
    );
}

export default GetStaticVariations;