import './App.css';
import 'antd/dist/antd.css';
import {Layout} from 'antd';
import {BrowserRouter, Route} from "react-router-dom";
import StartPage from "./components/StartPage/StartPage";
import FooterSection from "./components/FooterSection/FooterSection";
import HeaderSectionContainer from "./components/HeaderSection/HeaderSectionContainer";
import UploadGS from "./components/UploadGS/UploadGS";
import UploadResult from "./components/UploadGS/UploadResult/UploadResult";
import React from "react";
import NavbarSectionContainer from "./components/NavbarSection/NavbarSectionContainer";


const {Content} = Layout;

function App() {
    return (
        <BrowserRouter>
            <Layout style={{minHeight: '100vh'}}>
                <HeaderSectionContainer/>
                <Layout>
                    <NavbarSectionContainer/>
                    <Layout style={{padding: '84px 24px 24px 24px'}}>
                        <Content className="main-content">
                            <Route exact path={'/'} render={() => <StartPage/>}/>
                            <Route path={'/uploadGs'} render={() => <UploadGS/>}/>
                            <Route exact path={'/uploadGsResult'} render={() => <UploadResult/>}/>
                        </Content>
                    </Layout>
                </Layout>
                <FooterSection/>
            </Layout>
        </BrowserRouter>
    )
}

export default App;
