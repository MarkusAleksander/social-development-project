import React, { Component } from "react";

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
            <div></div>
        )
    }

}

export default Profile;