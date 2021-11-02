import React from 'react';
import {Select} from 'antd';
const { Option } = Select;

const SelectType = (props) => {

    const options = props.listOfTypes.map(listItem => <Option key={listItem} value={listItem}>{listItem}</Option>)

    function handleChange(value) {
        const typeObj = {
            sheetName: props.sheetName,
            index: props.index,
            typeValue: value
        }

        props.setType(typeObj)
    }

    return (
        <>
            <Select defaultValue={props.defaultTypes[props.index]} style={{ width: 120 }} onChange={handleChange}>
                {options}
            </Select>
        </>
    );
}

export default SelectType;