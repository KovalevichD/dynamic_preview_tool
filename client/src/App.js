import './App.css';
import 'antd/dist/antd.css';
import {Layout} from 'antd';
import {BrowserRouter, Route} from "react-router-dom";
import NavbarSection from "./components/NavbarSection/NavbarSection";
import StartPage from "./components/StartPage/StartPage";
import FooterSection from "./components/FooterSection/FooterSection";
import HeaderSectionContainer from "./components/HeaderSection/HeaderSectionContainer";
import UploadGS from "./components/UploadGS/UploadGS";


const {Content} = Layout;

function App() {
    return (
        <BrowserRouter>
            <Layout style={{minHeight: '100vh'}}>
                <HeaderSectionContainer />
                <Layout hasSider={true}>
                    <NavbarSection/>
                    <Layout style={{padding: '24px'}}>
                        <Content className="main-content">
                            <Route exact path={'/'} render={() => <StartPage/>}/>
                            <Route path={'/uploadGs'} render={() => <UploadGS/>}/>
                        </Content>
                    </Layout>
                </Layout>
                <FooterSection/>
            </Layout>
        </BrowserRouter>
    )
}

export default App;