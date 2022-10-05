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
import LoginPage from "./componets/Login/Login";
import {connect} from "react-redux";
import React from "react";
import {initializeApp} from "./redux/AppReducer";
import PreloaderComponent from "./componets/Preloader/PreloaderComponent";

class App extends React.Component {

  componentDidMount() {
    this.props.initializeApp();

  }

  render() {

    if (!this.props.initialization) {
      return (
        <PreloaderComponent/>)
    }

    return (
      <div className={"app-wrapper"}>
        <HeaderContainer/>
        <Navbar/>
        <Routes>
          <Route path='/profile/*' element={<ProfileContainer/>}/>
          <Route path='/dialog/*' element={<DialogContainer/>}/>
          <Route path='/users/*' element={<UsersContainer/>}/>
          <Route path='/services/*' element={<Services/>}/>
          <Route path='/music/*' element={<Music/>}/>
          <Route path='/settings/*' element={<Settings/>}/>
          <Route path='/login/*' element={<LoginPage/>}/>
        </Routes>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialization: state.App.initialization
})


export default connect(mapStateToProps, {initializeApp})(App);
