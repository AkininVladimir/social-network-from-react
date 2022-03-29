import './App.css';
import Header from './componets/Header/Header';
import Navbar from './componets/Navbar/Navbar';
import Dialog from './componets/Dialog/Dialog';
import Profile from './componets/Profile/Profile';
import Settings from "./componets/Settings/Settings";
import Music from "./componets/Music/Music";
import Services from "./componets/Services/Services";
import {BrowserRouter, Route, Routes} from "react-router-dom";

const App = (props) => {

    return (<BrowserRouter>
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path='/dialog' element={<Dialog dialog={props.dialog}/>}/>
                    <Route path='/profile' element={<Profile posts={props.posts}/>}/>
                    <Route path='/services' element={<Services/>}/>
                    <Route path='/music' element={<Music/>}/>
                    <Route path='/settings' element={<Settings/>}/>
                </Routes>
            </div>
        </div>
    </BrowserRouter>)
}

export default App;
