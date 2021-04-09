import React from "react";

const Form = (props) => (<form className="py-2" onSubmit={props.onSubmitHandler}>{props.children}</form>)

export default Form;