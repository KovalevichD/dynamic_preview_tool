import React from 'react';
import {Typography, Button, Input} from 'antd';

const {Title} = Typography;

const GetSheetInfo = (props) => {

    return (
        <>
            <Title level={4} style={{textAlign: 'left', marginTop: '50px'}}>Select the content source data file you want
                to
                transform.</Title>
            <Input id={'input'}
                   onChange={props.onChange}
                   allowClear={true}
                   value={props.urlInputText}
                   placeholder="Spreadsheet URL"
                   style={{width: '50%'}}/>

                <Button onClick={props.onClick}
                        loading={props.isFetching}
                        type="primary"
                        style={{marginLeft: '20px'}}>Load Sheet</Button>
        </>
    );
}

export default GetSheetInfo;