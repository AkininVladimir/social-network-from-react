import React, {Component} from "react";
import {Navigate} from "react-router-dom";
import {connect} from "react-redux";
import {useMatch} from "react-router";

export const withAuthRedirect = (Component) => {

    let mapStateToPropsForRedirect = (state) => {

        return {
            isAuth: state.Auth.isAuth
        }
    }

    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) return <Navigate to={'/login'}/>

            return (
                <Component{...this.props}/>
            )
        }
    }

    const ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);

    return ConnectedAuthRedirectComponent;
}
export const withRouter = (Component) => {
    let RouterComponent = (props) => {
        let match = useMatch("/profile/:userId")

        return (
            <Component {...props} match={match}/>
        )
    }
    return RouterComponent
}