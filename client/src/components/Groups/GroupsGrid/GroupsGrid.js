import React from "react";

import GroupsAvatar from "./../GroupsAvatar/GroupsAvatar";

const GroupsGrid = (props) => (
    <ul className="flex flex-wrap">
        {props.groups.map((group) => {
            return <li className="w-1/4 p-1 mt-1"><GroupsAvatar group_id={group.group_id} src={group.avatar} /></li>
        })}
    </ul>
);

export default GroupsGrid;