import React from 'react';
import {Table, Button, Typography} from 'antd';
import SelectType from "./SelectType/SelectType";

const {Title} = Typography;

const ShowSheetsData = (props) => {
    const dataSource = [];
    const columnsArr = [];

    props.sheetData.forEach((data, sheetIndex) => {
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
                        defaultTypes={props.sheetData[sheetIndex].selectedTypes}
                        index={index}
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

    const tables = dataSource.map((sheet, index) => <Table
            key={index}
            bordered={true}
            title={() => <div style={{fontSize: '20px', fontWeight: 'bold'}}>{sheet[0].sheetName}</div>}
            size="small"
            pagination={false}
            style={{marginBottom: '45px'}}
            columns={columnsArr[index]}
            dataSource={sheet}
        />
    )
    return (
        <>
            <Title level={5} style={{textAlign: 'left', marginTop: '50px', marginBottom: '20px'}}>Choose field type for
                each property</Title>
            {tables}

            <Button type="primary">Continue</Button>
        </>
    );
}

export default ShowSheetsData;