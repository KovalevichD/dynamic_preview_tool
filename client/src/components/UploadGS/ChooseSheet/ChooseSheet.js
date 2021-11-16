import React, {useState} from 'react';
import {message, Select, Typography, Button} from 'antd';
import {getSheetsData} from "../../../api/api";
import {Redirect} from "react-router-dom";

const {Option} = Select;
const {Title} = Typography;

const ChooseSheet = (props) => {
    const [isDisabled, toggleIsDisabled] = useState(false);
    const [redirect, setRedirect] = useState(false);
    const totalSheetsList = props.totalListOfSheets;
    const sheetsListToUpload = props.listOfSheetsToUpload;
    const optionsList = totalSheetsList.map(listItem => <Option key={listItem} value={listItem}>{listItem}</Option>)

    const onChange = (value) => {
        value.length <= 0 ? toggleIsDisabled(true) : toggleIsDisabled(false)
        props.addListOfSheetsToUpload(value)
    }

    const onClick = async () => {
        props.toggleIsFetching(true)

        const spreadsheetData = await getSheetsData(props.spreadsheetId, props.listOfSheetsToUpload)

        props.toggleIsFetching(false)

        props.addData(spreadsheetData.data.sheetsData)
        message.success('The data has been loaded!');
        setRedirect(true)
    }

    if (redirect) {
        return <Redirect to='/uploadGs/step_2'/>;
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
            <Button type="primary" onClick={onClick} loading={props.isFetching} disabled={isDisabled} style={{marginLeft: '20px'}}>Select Types</Button>
        </>
    );
}

export default ChooseSheet;