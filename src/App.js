import logo from './logo.svg';
import './App.css';
import Header from './componets/Header/Header';
import Navbar from './componets/Navbar/Navbar';
import Dialog from './componets/Dialog/Dialog';
import Profile from './componets/Profile/Profile';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Settings from "./componets/Settings/Settings";
import Music from "./componets/Music/Music";
import Services from "./componets/Services/Services";

const App = () => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/dialog' element={<Dialog/>}/>
                        <Route path='/profile' element={<Profile/>}/>
                        <Route path='/services' element={<Services/>}/>
                        <Route path='/music' element={<Music/>}/>
                        <Route path='/settings' element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>)
}

export default App;
