import React from "react";

import Panel from "./../../UI/Panel/Panel";
import ConnectionsGrid from "./../../Connections/ConnectionsGrid/ConnectionsGrid";

const ConnectionsPanel = (props) => (
    <Panel>
        <p>Connections</p>
        <ConnectionsGrid connections={props.connections} />
    </Panel>
)

export default ConnectionsPanel;