import './App.css';
import 'antd/dist/antd.css';
import {Layout} from 'antd';
import {BrowserRouter, Route} from "react-router-dom";
import StartPage from "./components/StartPage/StartPage";
import FooterSection from "./components/FooterSection/FooterSection";
import UploadGS from "./components/UploadGS/UploadGS";
import React from "react";
import HeaderSection from "./components/HeaderSection/HeaderSection";
import UploadCreatives from "./components/UploadCreatives/UploadCreatives";
import GetStaticVariations from "./components/GetStaticVariations/GetStaticVariations";

//https://docs.google.com/spreadsheets/d/1Qa3o9DmsRm6O_znmB8Ms0P6CeOu-YluYImanmIGAuW0/edit#gid=0
const {Content} = Layout;

function App() {

    return (
        <BrowserRouter>
            <Layout style={{minHeight: '100vh'}}>
                <HeaderSection/>
                <Content className="main-content" style={{width: '990px', margin: '0 auto'}}>
                    <Route exact path={'/'} render={() => <StartPage/>}/>
                    <Route path={'/uploadGs'} render={() => <UploadGS/>}/>
                    <Route path={'/uploadCreatives'} render={() => <UploadCreatives/>}/>
                    <Route path={'/getStaticVariations'} render={() => <GetStaticVariations/>}/>
                </Content>
                <FooterSection/>
            </Layout>
        </BrowserRouter>
    )
}

export default App;
