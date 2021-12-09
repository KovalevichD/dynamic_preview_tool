import React from 'react';
import {Spin} from "antd";

const WithFetchingHoc = (Component) => {
    return (props) => {
        return (
            <Spin size="large" spinning={props.isFetching} tip="Loading...">
                <Component {...props}/>
            </Spin>
        )
    };
}

export default WithFetchingHoc;