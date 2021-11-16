import React from 'react';
import {Steps} from 'antd';
import {NavLink} from "react-router-dom";
import {OrderedListOutlined, SettingOutlined, AreaChartOutlined} from '@ant-design/icons';
import styles from './Progress.module.css'

const {Step} = Steps;

const Progress = (props) => {

    return (
        <Steps type="navigation" current={+props.match.params.step} responsive={true}>
            <Step
                title={<NavLink activeClassName={styles.selected}
                                className={styles.title}
                                to='/uploadGs/step_0'>Load spreadsheet info</NavLink>}
                icon={<NavLink className={styles.icon}
                               to='/uploadGs/step_0'><AreaChartOutlined/></NavLink>}
            />
            <Step
                title={<NavLink activeClassName={styles.selected}
                                className={styles.title}
                                to='/uploadGs/step_1'>Choose sheets to load</NavLink>}
                icon={<NavLink className={styles.icon}
                               to='/uploadGs/step_1'><OrderedListOutlined/></NavLink>}
            />
            <Step
                title={<NavLink activeClassName={styles.selected}
                                className={styles.title}
                                to='/uploadGs/step_2'>Set up the code snippet</NavLink>}
                icon={<NavLink className={styles.icon}
                               to='/uploadGs/step_2'><SettingOutlined/></NavLink>}/>
            {/*<Step title='Load spreadsheet info'/>*/}
            {/*<Step disabled={!props.totalListOfSheetsLength} title='Choose sheets to load'/>*/}
            {/*<Step disabled={!props.sheetDataLength} title='Set up the code snippet'/>*/}
        </Steps>
    );
}

export default Progress;