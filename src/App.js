import './App.css';
import Header from './componets/Header/Header';
import Navbar from './componets/Navbar/Navbar';
import Profile from './componets/Profile/Profile';
import Settings from "./componets/Settings/Settings";
import Music from "./componets/Music/Music";
import Services from "./componets/Services/Services";
import {Route, Routes} from "react-router-dom";
import DialogContainer from "./componets/Dialog/DialogContainer";

const App = (props) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <Routes>
                <Route path='/dialog' element={<DialogContainer store={props.store}/>}/>
                <Route path='/profile' element={<Profile store={props.store}/>}/>
                <Route path='/services' element={<Services/>}/>
                <Route path='/music' element={<Music/>}/>
                <Route path='/settings' element={<Settings/>}/>
            </Routes>
        </div>
    )
}

export default App;
