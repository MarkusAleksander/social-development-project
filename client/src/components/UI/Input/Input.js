import React from "react";

import Auxillary from "./../../../hoc/Auxillary/Auxillary";

const Input = (props) => {

    let inputElement, validityClassname = null;

    if (props.invalid && props.shouldValidate && props.touched) {
        validityClassname = "bg-red-100"
    }

    switch (props.elementType) {
        case "input":
            inputElement = (
                <input
                    className={"w-full block border-solid border border-gray-300 py-1 px-2 rounded-md mb-2 focus:outline-none focus:border-red-500" + (validityClassname ? ` ${validityClassname}` : " ")}
                    {...props.elementConfig}
                    value={props.value}
                    onChange={props.changed}
                />
            );
            break;
        case "textarea":
            inputElement = (
                <textarea
                    className={"" + (validityClassname ? ` ${validityClassname}` : " ")}
                    {...props.elementConfig}
                    value={props.value}
                    onChange={props.changed}
                />
            );
            break;
        case "select":
            inputElement = (
                <select
                    className={"" + (validityClassname ? ` ${validityClassname}` : " ")}
                    value={props.value}
                    onChange={props.changed}
                >
                    {props.elementConfig.options.map((option) => (
                        <option value={option.value} key={option.value}>
                            {option.displayValue}
                        </option>
                    ))}
                </select>
            );
            break;
        default:
            inputElement = (
                <input
                    className={"" + (validityClassname ? ` ${validityClassname}` : " ")}
                    {...props.elementConfig}
                    value={props.value}
                    onChange={props.changed}
                />
            );
    }

    return (
        <Auxillary>
            <label className="block w-full">
                {props.label ? <span>{props.label}</span> : null}
                {inputElement}
            </label>
        </Auxillary>
    );
}

export default Input;