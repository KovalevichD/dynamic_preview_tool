import React from 'react';
import {Redirect} from "react-router-dom";

const WithNoDataRedirect = (Component) => {
    return (props) => {
        if (!props.isNoData) return <Redirect to={'/'}/>
        return <Component {...props}/>
    }
}

export default WithNoDataRedirect;