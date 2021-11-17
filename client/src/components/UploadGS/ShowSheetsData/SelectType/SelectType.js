import React from 'react';
import {Select} from 'antd';

const {Option} = Select;

const SelectType = (props) => {

    const options = props.listOfTypes.map(listItem => <Option key={listItem} value={listItem}>{listItem}</Option>)

    const handleChange = (value) => {
        const typeObj = {
            rowIndex: props.rowIndex,
            elementIndex: props.sheetIndex,
            typeValue: value
        }

        props.setType(typeObj)
    }

    return (
        <>
            <Select defaultValue={props.defaultTypes[props.rowIndex]} style={{width: 120}} onChange={handleChange}>
                {options}
            </Select>
        </>
    );
}

export default SelectType;