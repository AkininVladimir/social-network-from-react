import './App.css';
import Navbar from './componets/Navbar/Navbar';
import Settings from "./componets/Settings/Settings";
import Music from "./componets/Music/Music";
import Services from "./componets/Services/Services";
import {Route, Routes} from "react-router-dom";
import DialogContainer from "./componets/Dialog/DialogContainer";
import UsersContainer from "./componets/Users/UsersContainer";
import ProfileContainer from "./componets/Profile/ProfileContainer";
import HeaderContainer from "./componets/Header/HeaderContainer";

const App = (props) => {
    return (
        <div className='app-wrapper'>
            <HeaderContainer/>
            <Navbar/>
            <Routes>
                <Route path='/dialog' element={<DialogContainer store={props.store}/>}/>
                <Route path='/profile' element={<ProfileContainer/>}/>
                <Route path='/profile/:userId?' element={<ProfileContainer/>}/>
                <Route path='/users' element={<UsersContainer/>}/>
                <Route path='/services' element={<Services/>}/>
                <Route path='/music' element={<Music/>}/>
                <Route path='/settings' element={<Settings/>}/>
            </Routes>
        </div>
    )
}

export default App;
