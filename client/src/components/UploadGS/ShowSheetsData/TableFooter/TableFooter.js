import React from 'react';
import {InputNumber, Typography} from 'antd';
const { Paragraph} = Typography;

const TableHeader = (props) => {

    const onQuantityChange = (value) => {
        props.setQuantity(props.index, value)
    }

    return (
        <div style={{display: 'flex'}}>
            <Paragraph >Quantity:</Paragraph>
            <InputNumber min={1} max={props.dataLength}
                         value={props.quantity}
                         onChange={onQuantityChange}/>
        </div>
    );
}

export default TableHeader;