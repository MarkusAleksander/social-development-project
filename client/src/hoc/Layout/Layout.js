import React from "react";
import Auxillary from "../Auxillary/Auxillary";

import Toolbar from "./../../components/Toolbar/Toolbar";

const Layout = (props) => {
    return (
        <Auxillary>
            <Toolbar />
            <main className="xl:container">{props.children}</main>
        </Auxillary>
    )
}

export default Layout;