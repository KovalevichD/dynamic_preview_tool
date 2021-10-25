// import './App.css';
import 'antd/dist/antd.css';
import {Layout} from 'antd';
import HeaderSection from "./components/Header/HeaderSection";
import Progress from "./components/Progress/Progress";
import {BrowserRouter, Route} from "react-router-dom";
import Docs from "./components/Docs/Docs";
import UploadGS from "./components/UploadGS/UploadGS";
import {updateDescriptionText} from "./State";

const {Content, Footer} = Layout;

function App(props) {
    return (
        <BrowserRouter>
            <Layout style={{height: '100vh'}}>
                <HeaderSection/>
                <Progress/>
                <Content style={{padding: '50px 200px'}}>
                    <Route path={'/uploadGS'} render={() => <UploadGS addDescription={props.addDescription}
                                                                      updateDescriptionText={props.updateDescriptionText}
                                                                      descriptionText = {props.state.descriptionText}
                    />}/>
                    <Route path={'/docs'} render={() => <Docs description={props.state.description}/>}/>
                </Content>
                <Footer style={{textAlign: 'center'}} className="footer">Preview Tool ©2021 Created by Dmitry
                    Kovalevich</Footer>
            </Layout>
        </BrowserRouter>
    )
}

export default App;
