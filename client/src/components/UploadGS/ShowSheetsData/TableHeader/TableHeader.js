import React from 'react';
import {Typography} from 'antd';

const {Paragraph} = Typography;

const TableHeader = (props) => {
    const editSheetName = (value) => props.updateSheetName(props.index, value)

    return (
        <Paragraph
            editable={{
                tooltip: 'Edit element name',
                onChange: editSheetName,
            }}
        >
            {props.elementName}
        </Paragraph>
    );
}

export default TableHeader;