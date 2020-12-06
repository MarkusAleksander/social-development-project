import React from "react";

import Avatar from "./../../UI/Avatar/Avatar";

const ConnectionsAvatar = (props) => (
    <a href={`/profile/${props.profile_id}`}>
        <Avatar src={props.src} />
    </a>
);

export default ConnectionsAvatar;