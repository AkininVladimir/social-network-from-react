import React from "react";
import axios from "axios";
import {connect} from "react-redux";
import {addPost, selectUpdatePost, setUsersProfile} from "../../redux/ProfileReducer";
import Profile from "./Profile";


class ProfileAPIComponent extends React.Component {

    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(res => {

                this.props.setUsersProfile(res.data);
            })
    }

    render() {
        return (
            <div>
                <Profile {...this.props} userProfile={this.props.userProfile}/>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        userProfile: state.ProfilePage.userProfile,
    }
}
let ProfileContainer = connect(mapStateToProps, {setUsersProfile, selectUpdatePost, addPost})(ProfileAPIComponent);

export default ProfileContainer;
