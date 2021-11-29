import React from 'react';
import {Collapse, List} from 'antd';
import {DeleteTwoTone, FileTwoTone, FolderTwoTone} from '@ant-design/icons';

const {Panel} = Collapse;

const ListToUpload = (props) => {
    const list = props.filesInFolders;
    const collapsePanels = [];

    const onClick = (e) => {
        props.removeFilesToLoad(e.currentTarget.id)

        e.stopPropagation();
        e.preventDefault();
    }

    for (let [folder, fileArr] of Object.entries(list)) {

        const collapsePanel = (
            <Panel header={<>
                <FolderTwoTone
                    style={{marginRight: '5px', fontSize: '30px', position: 'relative', bottom: '-5px'}}/>
                {folder}</>}
                   style={{fontWeight: 'bold'}}
                   extra={<DeleteTwoTone id={folder} twoToneColor='#f5222d' style={{fontSize: '23px'}}
                                         onClick={onClick}/>} key={folder}>
                <List size="small"
                      style={{fontWeight: 'normal', marginLeft: '45px'}}
                      dataSource={fileArr}
                      renderItem={item => <List.Item>
                          <FileTwoTone style={{
                              marginRight: '5px',
                              fontSize: '18px',
                              position: 'relative',
                              bottom: '-1px'
                          }}/>{item}
                      </List.Item>}
                />
            </Panel>
        )

        collapsePanels.push(collapsePanel)
    }

    return (
        <Collapse ghost accordion={true}>
            {collapsePanels}
        </Collapse>
    )
}

export default ListToUpload;