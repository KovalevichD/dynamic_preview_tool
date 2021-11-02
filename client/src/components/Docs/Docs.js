import React from 'react';
import {Avatar, List} from "antd";

const Docs = (props) => {
    return (
        <List
            itemLayout="horizontal"
            dataSource={props.description}
            renderItem={item => (
                <List.Item>
                    <List.Item.Meta
                        avatar={<Avatar src={item.avatar} />}
                        title={<a href="https://www.linkedin.com/in/dmitry-kovalevich/">{item.title}</a>}
                        description={item.description}
                    />
                </List.Item>
            )}
        />
    );
}

export default Docs;