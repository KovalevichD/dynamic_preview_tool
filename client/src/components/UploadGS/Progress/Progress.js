import React from 'react';
import {Steps} from 'antd';
import {NavLink} from "react-router-dom";
import {HddFilled, SettingFilled, AreaChartOutlined} from '@ant-design/icons';
import styles from './Progress.module.css'

const {Step} = Steps;

const Progress = (props) => {
    let step_1Disabled = !props.totalListOfSheetsLength ? styles.disabled : '';
    let step_2Disabled = !props.sheetDataLength ? styles.disabled : '';

    return (
        <Steps type="navigation" current={+props.match.params.step} responsive={true}>
            <Step
                title={<NavLink activeClassName={styles.selected}
                                className={styles.title}
                                to='/uploadGs/step_0'>Load spreadsheet info</NavLink>}
                icon={<NavLink className={styles.icon}
                               to='/uploadGs/step_0'><AreaChartOutlined/></NavLink>}
            />
            <Step disabled={!props.totalListOfSheetsLength}
                  title={<NavLink activeClassName={styles.selected}
                                  className={`${styles.title} ${step_1Disabled}`}
                                  to='/uploadGs/step_1'>Choose sheets to load</NavLink>}
                  icon={<NavLink className={`${styles.icon} ${step_1Disabled}`}
                                 to='/uploadGs/step_1'><HddFilled /></NavLink>}
            />
            <Step disabled={!props.sheetDataLength}
                  title={<NavLink activeClassName={styles.selected}
                                  className={`${styles.title} ${step_2Disabled}`}
                                  to='/uploadGs/step_2'>Set up the code snippet</NavLink>}
                  icon={<NavLink className={`${styles.icon} ${step_2Disabled}`}
                                 to='/uploadGs/step_2'><SettingFilled /></NavLink>}/>
        </Steps>
    );
}

export default Progress;