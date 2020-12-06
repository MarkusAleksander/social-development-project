import React from "react";

import ConnectionsAvatar from "./../ConnectionsAvatar/ConnectionsAvatar";

const ConnectionsGrid = (props) => (
    <ul className="flex flex-wrap">
        {props.connections.map((connection) => {
            return <li className="w-1/4 p-1 mt-1"><ConnectionsAvatar profile_id={connection.profile_id} src={connection.avatar} /></li>
        })}
    </ul>
);

export default ConnectionsGrid;