import React from 'react';
import {DeleteTwoTone} from '@ant-design/icons';

const ListOfCreatives = (props) => {
    const onClick = (e) => {
        props.removeFilesToLoad(e.currentTarget.id)

        e.stopPropagation();
        e.preventDefault();
    }

    return <DeleteTwoTone id={props.folder} twoToneColor='#f5222d'
                          style={{fontSize: '23px'}}
                          onClick={onClick}/>
}

export default ListOfCreatives;