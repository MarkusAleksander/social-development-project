import React, { Component } from "react";

// * Router modules 
import { Route, Switch } from "react-router-dom";

// * Components
import HeaderLoggedIn from "./components/Header/LoggedIn/HeaderLoggedIn";
import HeaderLoggedOut from "./components/Header/LoggedOut/HeaderLoggedOut";

// * Containers
import Profile from "./containers/Profile/Profile";

class App extends Component {
    render() {
        return (
            <div id="app" className="bg-gray-100 min-h-screen">
                {/* do logic to determine if signed in or signed out */}
                <HeaderLoggedIn />
                <main className="container xl:container">
                    <Profile />
                </main>
            </div>
        )
    }
}

export default App;