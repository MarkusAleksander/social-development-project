import React from "react";
import { connect } from "react-redux";

import Header from "./../UI/Header/Header";
// import Input from "./../UI/Input/Input";
import Nav from "./../UI/Nav/Nav";
import NavItem from "./../UI/NavItem/NavItem";

const Toolbar = (props) => {

    let nav = (
        <Nav>
            <NavItem title="Login" href="/" exact>Login</NavItem>
            <NavItem title="Signup" href="/signup" exact>Sign Up</NavItem>
        </Nav>
    );

    if (props.isAuthenticated) {
        nav = (
            <Nav>
                <NavItem title="home" href="/" exact>Home</NavItem>
                <NavItem title="profile" href="/profile" exact>My Profile</NavItem>
                <NavItem title="logout" href="/logout" exact>Log Out</NavItem>
            </Nav>
        );
    }

    return (
        <Header className="absolute top-0 left-0 right-0 h-10">
            {/* <div className="py-2"><Input /></div> */}
            {nav}
        </Header>
    )
};

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.idToken !== null
    }
}

export default connect(mapStateToProps)(Toolbar);