import React, {Component} from "react";
import {Navigate} from "react-router-dom";
import {connect} from "react-redux";

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

  const  ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);

    return ConnectedAuthRedirectComponent;
}