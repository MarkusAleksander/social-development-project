import React from "react";

import Panel from "./../../UI/Panel/Panel";
import GroupsGrid from "./../../Groups/GroupsGrid/GroupsGrid";

const GroupsPanel = (props) => (
    <Panel>
        <p>Groups</p>
        <GroupsGrid groups={props.groups} />
    </Panel>
);

export default GroupsPanel;