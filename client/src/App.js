import React, { Component } from "react";

// * Router modules 
import { Route, Switch, withRouter, Redirect } from "react-router-dom";

// * store
import { connect } from "react-redux";
import * as actions from "./store/actions";

// * Components
// import HeaderLoggedIn from "./components/Header/LoggedIn/HeaderLoggedIn";
// import HeaderLoggedOut from "./components/Header/LoggedOut/HeaderLoggedOut";

// * Containers
import Profile from "./containers/Profile/Profile";
import Login from "./containers/Login/Login";
import Logout from "./containers/Logout/Logout";
import Posts from "./containers/Posts/Posts";
import Signup from "./containers/Signup/Signup";

// * HOC
import Layout from "./hoc/Layout/Layout";

class App extends Component {

    componentDidMount() {
        this.props.attemptAutoSignin();
    }

    render() {

        let routes = (
            <Switch>
                <Route path="/signup" component={Signup} />
                <Route path="/" exact component={Login} />
                <Redirect to="/" />
            </Switch>
        )

        if (this.props.isAuthenticated) {
            routes = (
                <Switch>
                    <Route path="/profile" component={Profile} />
                    <Route path="/logout" component={Logout} />
                    <Route path="/" exact component={Posts} />
                    <Redirect to="/" />
                </Switch>
            )
        }

        return (
            <div id="app" className="relative bg-gray-100 min-h-screen">
                <Layout>
                    {routes}
                </Layout>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.idToken !== null
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        attemptAutoSignin: () => dispatch(actions.authCheckState())
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));