import React, { Component } from "react";

import Panel from "./../../components/UI/Panel/Panel";
import UserDetails from "./../../components/Profile/UserDetails/UserDetails";

class Profile extends Component {

    constructor(props) {
        super(props);

        this.state = {
            user_data: null
        }
    }

    componentDidMount() {
        // * on mounting, get user data
    }

    componentDidUpdate() {
        // * on update
    }

    render () {
        return (
            <div className="flex py-4 space-x-4">
                {/* Profile details */}
                <div className="flex-grow space-y-4">
                    {/* profile */}
                    <UserDetails />
                    {/* connections list */}
                    <Panel />
                    {/* groups list */}
                    <Panel />
                </div>
                {/* Profile posts */}
                <div className="w-4/6 space-y-4">
                    {/* * status update */}
                    <Panel />
                    {/* * previous posts */}
                    <Panel />
                </div>
            </div>
        )
    }

}

export default Profile;