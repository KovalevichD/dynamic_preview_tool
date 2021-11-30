import React from 'react';
import {Collapse, List} from 'antd';
import {FileTwoTone, FolderTwoTone} from '@ant-design/icons';
import DeleteCreative from "./DeleteCreative/DeleteCreative";

const {Panel} = Collapse;

const ListOfCreatives = (props) => {
    const list = props.filesInFolders;
    const collapsePanels = [];

    for (let [folder, fileArr] of Object.entries(list)) {

        const collapsePanel = (
            <Panel header={<>
                <FolderTwoTone
                    style={{marginRight: '5px', fontSize: '30px', position: 'relative', bottom: '-5px'}}/>
                {folder}</>}
                   style={{fontWeight: 'bold'}}
                   extra={Object.keys(props.uploadedFiles).length === 0 ? <DeleteCreative removeFilesToLoad={props.removeFilesToLoad} folder={folder}/> : null}
                   key={folder}>
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

export default ListOfCreatives;