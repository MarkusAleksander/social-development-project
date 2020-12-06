import React from "react";

import Panel from "../../UI/Panel/Panel";
import Avatar from "../../UI/Avatar/Avatar";

const UserDetails = (props) => (
    <Panel>
        <Avatar className="w-3/4 mx-auto" src="https://markholden.co.uk/7c10a1038d77d3a14ce91c34bc556a16.jpg" />
        <p className="text-center antialiased">Name</p>
        <p className="text-center antialiased">Location</p>
        <p className="text-center antialiased">Age</p>
    </Panel>
);

export default UserDetails;