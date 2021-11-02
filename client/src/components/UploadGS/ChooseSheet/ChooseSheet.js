import React, {useState} from 'react';
import {Select, Typography, Button} from 'antd';
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

    function onChange(value) {
        value.length <= 0 ? toggleIsDisabled(true) : toggleIsDisabled(false)
        props.addListOfSheetsToUpload(value)
    }

    async function onClick () {
        props.toggleIsFetching(true)

        const spreadsheetData = await getSheetsData(props.spreadsheetId, props.listOfSheetsToUpload)

        props.toggleIsFetching(false)

        setRedirect(true)

        props.addSheetData(spreadsheetData.data.sheetsData)
    }

    if (redirect) {
        return <Redirect to='/uploadGs/getData'/>;
    }

    return (
        <>
            <Title level={5} style={{textAlign: 'left', marginTop: '50px'}}>Choose sheets you want to upload.</Title>
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
            <Button type="primary" onClick={onClick} loading={props.isFetching} disabled={isDisabled} style={{marginLeft: '20px'}}>Continue</Button>
        </>
    );
}

export default ChooseSheet;