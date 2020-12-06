import React from "react";

const Panel = (props) => (
    <div className={"bg-white" + (props.noPadding ? "" : " p-4")}>
        {props.children}
    </div>
);

export default Panel;