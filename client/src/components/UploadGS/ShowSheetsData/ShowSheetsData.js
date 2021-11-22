import React, {useRef, useState} from 'react';
import {BackTop, Table, Button, Typography, message, Input} from 'antd';
import SelectType from "./SelectType/SelectType";
import {Link} from "react-router-dom";
import TableHeader from "./TableHeader/TableHeader";
import TableFooter from "./TableFooter/TableFooter";
import createSnippets from "../../../utils/createSnippets";

const {Title} = Typography;

const ShowSheetsData = (props) => {
    const [dynamicId, setDynamicId] = useState('')
    const dynamicIdInputRef = useRef(null);
    const sheetData = props.data;
    const dataSource = [];
    const columnsArr = [];

    sheetData.forEach((data, sheetIndex) => {
        const rowsArr = [];

        for (let i = 0; i < data.data[0].length; i++) {
            const obj = {
                sheetName: data.sheetName,
                key: `${data.sheetName}_${data.data[0][i]}_${data.data[1][i]}`,
                'Field Name': data.data[0][i],
                'Field Type': '',
                'Sample Value': data.data[1][i]
            }
            rowsArr.push(obj)
        }

        dataSource.push(rowsArr)

        const columns = [
            {
                title: 'Field Name',
                dataIndex: 'Field Name',
                key: 'Field Name',
            },
            {
                title: 'Field Type',
                dataIndex: 'Field Type',
                key: 'Field Type',
                render: (text, record, index) =>
                    <SelectType
                        setType={props.setType}
                        listOfTypes={props.listOfTypes}
                        sheetName={record.sheetName}
                        defaultTypes={sheetData[sheetIndex].selectedTypes}
                        rowIndex={index}
                        sheetIndex={sheetIndex}
                    />
            },
            {
                title: 'Sample Value',
                dataIndex: 'Sample Value',
                key: 'Sample Value',
            }
        ];

        columnsArr.push(columns)
    })

    const tables = dataSource.map((sheet, index) =>

        <Table
            key={index}
            bordered={true}
            title={() => <TableHeader updateSheetName={props.updateElementName}
                                      elementName={sheetData[index].elementName}
                                      index={index}/>}
            footer={() => <TableFooter setQuantity={props.setQuantity}
                                       dataLength={sheetData[index].data.length}
                                       quantity={sheetData[index].quantity}
                                       index={index}/>}
            size="small"
            pagination={false}
            style={{marginBottom: '45px'}}
            columns={columnsArr[index]}
            dataSource={sheet}
        />
    )

    const onClick = () => {
        props.setDataReadyFlag(true)
        props.setDynamicId(dynamicId)
        const codeSnippetsArr = createSnippets(props.data)
        props.addCodeSnippets(codeSnippetsArr)
        message.success('Dynamic snippets have been created!');
    }

    return (
        <>
            <Title level={4} style={{textAlign: 'left', marginTop: '50px'}}>Specify the dynamic ID</Title>
            <Input ref={dynamicIdInputRef}
                   onChange={e => setDynamicId(e.target.value)}
                   allowClear={true}
                   value={dynamicId}
                   placeholder="Dynamic ID"
                   style={{width: '50%'}}/>
            <Title level={4} style={{textAlign: 'left', marginTop: '50px', marginBottom: '20px'}}>Choose field type for
                each property</Title>
            {tables}

            <Link to='/uploadGs/result'><Button onClick={onClick} type="primary">BUILD DATA</Button></Link>
            <BackTop/>
        </>
    );
}

export default ShowSheetsData;