import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUsersProfile} from "../../redux/ProfileReducer";

class ProfileContainer extends React.Component {

    componentDidMount() {

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setUsersProfile(response.data);
            });
    }

    render() {

        return (
            <Profile {...this.props} profile={this.props.profile}/> /*все пропсы которые приходят в контейнерную компоненту прокидываем в функциональную*/
        )
    }

}

let mapStateToProps = (state) => {
    return {
        profile: state.ProfilePage.profile
    }
}

export default connect(mapStateToProps, {setUsersProfile})(ProfileContainer);
