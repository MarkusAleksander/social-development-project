import React from "react";

const Button = (props) => {

    let style = "py-1 px-4 rounded-md border border-solid border-gray-300";

    switch (props.btnType) {
        case "primary":
            style = style.concat(" text-white bg-red-500 hover:bg-red-400 focus:bg-red-400 focus:outline-none");
            break;
        case "danger":
            style = "";
            break;
        default:
            break;
    }

    return (
        <button
            className={style}
            onClick={props.onclick}
        >{props.children}</button>
    )
}

export default Button;