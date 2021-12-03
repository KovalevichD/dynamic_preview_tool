import React from 'react';
import {Layout} from 'antd';
import styles from './FooterSection.module.css';
import logo from '../../assets/logo_horizontal.svg';

const {Footer} = Layout;

const FooterSection = () => {
    return (
        <Footer className={styles.footer}>
            <img className={styles.logo} src={logo} alt="Logo" />
            <div>Copyright © 2021 The One Stone Inc.</div>
            <div>Website designed and coded by <a className={styles.authorLink}
                                                  href={'https://www.linkedin.com/in/dmitry-kovalevich/'}>Dmitry Kovalevich
            </a>
            </div>
        </Footer>
    );
}

export default FooterSection;