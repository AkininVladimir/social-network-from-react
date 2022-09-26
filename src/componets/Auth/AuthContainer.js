import React from "react";
import {connect} from "react-redux";
import AuthComponent from "./Auth";
import {getAuthUserData, logout} from "../../redux/AuthReducer";


class AuthContainer extends React.Component {
    componentDidMount() {
    this.props.getAuthUserData();

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

export default connect(mapStateToProps, {getAuthUserData, logout})(AuthContainer);
