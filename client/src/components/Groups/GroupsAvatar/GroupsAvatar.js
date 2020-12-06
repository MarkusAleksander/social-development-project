import React from "react";

import Avatar from "./../../UI/Avatar/Avatar";

const GroupsAvatar = (props) => (
    <a href={`/group/${props.group_id}`}>
        <Avatar src={props.src} />
    </a>
);

export default GroupsAvatar;