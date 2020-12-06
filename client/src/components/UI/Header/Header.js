import React from "react";

const Header = (props) => (
    <header className="p-2 bg-red-500">
        <div className="container xl:container flex justify-between items-center">
            {props.children}
        </div>
    </header>
);

export default Header;