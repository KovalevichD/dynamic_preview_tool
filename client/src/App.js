import './App.css';
import 'antd/dist/antd.css';
import {Layout} from 'antd';
import {BrowserRouter, Route} from "react-router-dom";
import StartPage from "./components/StartPage/StartPage";
import FooterSection from "./components/FooterSection/FooterSection";
import UploadGS from "./components/UploadGS/UploadGS";
import UploadResult from "./components/UploadGS/UploadResult/UploadResult";
import React from "react";
import HeaderSection from "./components/HeaderSection/HeaderSection";


const {Content} = Layout;

function App() {
    return (
        <BrowserRouter>
            <Layout style={{minHeight: '100vh'}}>
                <HeaderSection/>
                <Layout>
                    <Content className="main-content">
                        <Route exact path={'/'} render={() => <StartPage/>}/>
                        <Route path={'/uploadGs'} render={() => <UploadGS/>}/>
                        <Route exact path={'/uploadGsResult'} render={() => <UploadResult/>}/>
                    </Content>
                </Layout>
                <FooterSection/>
            </Layout>
        </BrowserRouter>
    )
}

export default App;
