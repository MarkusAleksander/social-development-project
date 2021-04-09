import React from "react";

const Header = (props) => (
    <header className={"px-2 bg-red-500 ".concat(props.className)}>
        <div className="container xl:container flex justify-between items-center h-full">
            {props.children}
        </div>
    </header>
);

export default Header;