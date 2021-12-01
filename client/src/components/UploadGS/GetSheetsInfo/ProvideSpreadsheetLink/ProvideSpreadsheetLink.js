import React from 'react';
import {Typography, Button, Input, notification} from 'antd';
import {useHistory} from "react-router-dom";

const {Title} = Typography;

const GetSheetInfo = (props) => {
    const history = useHistory();

    const onClick = async () => {
        try {
            await props.getSheetList(props.urlInputText);

            notification.success({
                message: 'Success!',
                description:
                    'The list of sheets in the spreadsheet is loaded successfully.',
                placement: 'bottomRight'
            });

            history.push('/uploadGs/step_1');
        } catch (e) {
            props.toggleIsFetching(false);

            notification.error({
                message: 'Error!',
                description:
                    'Failed to upload files to the server. Please try again.',
                placement: 'bottomRight'
            });
        }
    }
    return (
        <>
            <Title level={4} style={{textAlign: 'left', marginTop: '50px'}}>Select the content source data file you want
                to
                transform.</Title>
            <Input onChange={e => props.updateUrlInputText(e.target.value)}
                   allowClear={true}
                   value={props.urlInputText}
                   placeholder="Spreadsheet URL"
                   style={{width: '50%'}}/>

            <Button onClick={onClick}
                    disabled={!props.urlInputText}
                    loading={props.isFetching}
                    type="primary"
                    style={{marginLeft: '20px'}}>LOAD SPREADSHEET</Button>
        </>
    );
}

export default GetSheetInfo;