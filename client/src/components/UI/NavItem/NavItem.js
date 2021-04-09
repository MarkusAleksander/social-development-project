import React from "react";
import { NavLink } from "react-router-dom";

const NavItem = (props) =>
(
    <li>
        <NavLink
            activeClassName={"bg-red-400"}
            to={props.href}
            exact={props.exact}
            className="flex items-center text-white border-b-2 border-red-800 border-solid hover:bg-red-400 h-full px-4"
        >
            {props.children}
        </NavLink>
    </li>
)

export default NavItem;