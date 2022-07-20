import React from "react";
import {usersAPI} from "../API/API";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/AuthReducer";
import AuthComponent from "./Auth";


class AuthContainer extends React.Component {
    componentDidMount() {

        usersAPI.authMe()
            .then(data => {
                if (data.resultCode === 0) {
                    // let {id, email, login} = response.data.data;
                    this.props.setAuthUserData(data.data);
                }

            });
    }

    render() {

        return (
            <AuthComponent {...this.props}/>
        )
    }

}

let mapStateToProps = (state) => {

    return (
        {
            getInfo: state.Auth
        })
}

export default connect(mapStateToProps, {setAuthUserData})(AuthContainer);