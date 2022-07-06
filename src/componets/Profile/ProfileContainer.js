import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {addPost, selectUpdatePost, setUsersProfile} from '../../redux/ProfileReducer';
import Profile from './Profile';
import {useMatch} from 'react-router';



class ProfileAPIComponent extends React.Component {

    componentDidMount() {

        let userId = this.props.match ? this.props.match.params.userId : 2;
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/profile` + userId)
            .then(res => {

                this.props.setUsersProfile(res.data);

            })
    }

    render() {
        return (<div>
                <Profile {...this.props} userProfile={this.props.userProfile}/>
            </div>)
    }
}

let mapStateToProps = (state) => {
    return {
        userProfile: state.ProfilePage.userProfile,
    }
}

let ProfileMatch = (props) => {
    let match = useMatch('/profile/:userId')

    return (
            <ProfileAPIComponent {...props} match={match}/>
    )
}


let ProfileContainer = connect(mapStateToProps, {setUsersProfile, selectUpdatePost, addPost})(ProfileMatch);

export default ProfileContainer;
