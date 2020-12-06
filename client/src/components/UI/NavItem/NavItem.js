import React from "react";

const NavItem = (props) => <a href={props.href} title={props.title}>{props.children}</a>

export default NavItem;