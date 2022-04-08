import './App.css';
import Header from './componets/Header/Header';
import Navbar from './componets/Navbar/Navbar';
import Dialog from './componets/Dialog/Dialog';
import Profile from './componets/Profile/Profile';
import Settings from "./componets/Settings/Settings";
import Music from "./componets/Music/Music";
import Services from "./componets/Services/Services";
import {Route, Routes} from "react-router-dom";

const App = (props) => {

    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
                <Routes>
                    <Route path='/dialog' element={<Dialog DialogState = {props.appState.DialogsPage.dialog}
                                                           MassegeState = {props.appState.DialogsPage.say}
                                                           addMassegeText={props.addMassegeText}
                                                           addSayMassege ={props.appState.DialogsPage.addSayMassege}
                                                           newMassegeText={props.newMassegeText}/>}/>
                    <Route path='/profile' element={<Profile PostState = {props.appState.ProfilePage.post}
                                                             newPost = {props.newPost}
                                                             updateNewPost = {props.updateNewPost}
                                                             newPostChange = {props.appState.ProfilePage.newPostChange}/>}/>
                    <Route path='/services' element={<Services/>}/>
                    <Route path='/music' element={<Music/>}/>
                    <Route path='/settings' element={<Settings/>}/>
                </Routes>
        </div>
    )
}

export default App;
