import './App.css';
import 'antd/dist/antd.css';
import {Layout} from 'antd';
import {BrowserRouter, Route} from "react-router-dom";
import StartPage from "./components/StartPage/StartPage";
import FooterSection from "./components/FooterSection/FooterSection";
import UploadGS from "./components/UploadGS/UploadGS";
import React from "react";
import HeaderSection from "./components/HeaderSection/HeaderSection";
import UploadCreativesContainer from "./components/UploadCreatives/UploadCreativesContainer";

//https://docs.google.com/spreadsheets/d/1Qa3o9DmsRm6O_znmB8Ms0P6CeOu-YluYImanmIGAuW0/edit#gid=0
const {Content} = Layout;

function App() {
    // const [confirmOpen, setConfirmOpen] = useState(true)

    return (
        // <BrowserRouter getUserConfirmation={(message, callback) => {
        //     return CustomPrompt(
        //         message,
        //         callback,
        //         confirmOpen,
        //         setConfirmOpen
        //     );
        // }}>
        <BrowserRouter>
            <Layout style={{minHeight: '100vh'}}>
                <HeaderSection/>
                <Content className="main-content" style={{width: '990px', margin: '0 auto'}}>
                    <Route exact path={'/'} render={() => <StartPage/>}/>
                    <Route path={'/uploadGs'} render={() => <UploadGS/>}/>
                    <Route path={'/uploadCreatives'} render={() => <UploadCreativesContainer/>}/>
                </Content>
                <FooterSection/>
            </Layout>
        </BrowserRouter>
    )
}

export default App;
