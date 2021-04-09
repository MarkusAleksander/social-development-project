import React from "react"

import Panel from "./../../UI/Panel/Panel";

const Post = (props) => (
    <Panel>
        <div><p>{props.content}</p></div>
        <div></div>
    </Panel>
);

export default Post;