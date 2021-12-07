import React, {useState} from 'react';
import {Select, Typography, Button, notification} from 'antd';
import {useHistory} from "react-router-dom";

const {Option} = Select;
const {Title} = Typography;

const ChooseSheet = (props) => {
    const [isDisabled, toggleIsDisabled] = useState(false);
    const totalSheetsList = props.totalListOfSheets;
    const sheetsListToUpload = props.listOfSheetsToUpload;
    const optionsList = totalSheetsList.map(listItem => <Option key={listItem} value={listItem}>{listItem}</Option>);
    const history = useHistory();

    const onChange = (value) => {
        value.length <= 0 ? toggleIsDisabled(true) : toggleIsDisabled(false);
        props.addListOfSheetsToUpload(value);
    }

    const onClick = async () => {
        try {
            await props.getSheetsData(props.spreadsheetId, props.listOfSheetsToUpload);

            notification.success({
                message: 'Success!',
                description:
                    'The spreadsheet data is loaded successfully.',
                placement: 'bottomRight'
            });

            history.push('/uploadGs/step_2');
        } catch (e) {
            props.toggleIsFetching(false);

            notification.error({
                message: 'Error!',
                description:
                    'Failed to load data from the spreadsheet. Please try again.',
                placement: 'bottomRight'
            });
        }
    }

    return (
        <>
            <Title level={4} style={{textAlign: 'left', marginTop: '50px'}}>Choose sheets you want to upload.</Title>
            <Select
                mode="multiple"
                allowClear
                style={{width: '50%'}}
                placeholder="Please select at least one sheet to upload"
                defaultValue={sheetsListToUpload}
                onChange={onChange}
            >
                {optionsList}
            </Select>
            <Button type="primary" onClick={onClick} loading={props.isFetching} disabled={isDisabled}
                    style={{marginLeft: '20px'}}>LOAD SHEETS</Button>
        </>
    );
}

export default ChooseSheet;