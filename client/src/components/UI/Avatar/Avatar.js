import React from "react";

const Avatar = (props) => <div className={"rounded-full overflow-hidden" + (props.className ? " ".concat(props.className) : "")}><img alt="" src={props.src} /></div>

export default Avatar;