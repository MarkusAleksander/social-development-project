import React from "react";

import Header from "./../../UI/Header/Header";
import Nav from "./../../UI/Nav/Nav";
import NavItem from "./../../UI/NavItem/NavItem";

const HeaderLoggedOut = (props) => (
    <Header>
        <div>
            <Nav>
                <NavItem title="login" href="/login">Log In</NavItem>
                <NavItem title="signup" href="/signup">Sign Up</NavItem>
            </Nav>
        </div>
    </Header>
);

export default HeaderLoggedOut;