import React from "react";
import {connect} from "react-redux";
import AuthComponent from "./Auth";
import {logout} from "../../redux/AuthReducer";


class AuthContainer extends React.Component {

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

export default connect(mapStateToProps, {logout})(AuthContainer);
