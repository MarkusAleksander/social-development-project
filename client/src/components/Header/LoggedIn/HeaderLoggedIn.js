import React from "react";

import Header from "./../../UI/Header/Header";
import Input from "./../../UI/Input/Input";
import Nav from "./../../UI/Nav/Nav";
import NavItem from "./../../UI/NavItem/NavItem";

const HeaderLoggedIn = (props) => (
    <Header>
        <div><Input /></div>
        <div>
            <Nav>
                <NavItem title="home" href="/">Home</NavItem>
                <NavItem title="profile" href="/profile">My Profile</NavItem>
                <NavItem title="logout" href="/logout">Log Out</NavItem>
            </Nav>
        </div>
    </Header>
);

export default HeaderLoggedIn;