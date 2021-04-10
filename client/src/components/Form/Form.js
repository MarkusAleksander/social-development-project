import React from "react";

// import Form from "./../../components/UI/Form/Form";
import Input from "./../../components/UI/Input/Input";

const Form = (props) => {

    const formElements = [];

    // * get the form elements into a key/config set
    for (let key in props.formConfig) {
        formElements.push({
            id: key,
            config: props.formConfig[key]
        });
    }
    
    return (
        <form className="py-2" onSubmit={props.onSubmitHandler}>
            {
                formElements.map(formElement => (
                    <div key={formElement.id}>
                        <Input
                            elementType={formElement.config.elementType}
                            elementConfig={formElement.config.elementConfig}
                            value={formElement.config.value}
                            invalid={!formElement.config.valid}
                            shouldValidate={formElement.config.validation}
                            touched={formElement.config.touched}
                            changed={(event) => {
                                props.inputChangedHandler(event, formElement.id)
                            }}
                        />
                        {formElement.config.displayMessaging && formElement.config.displayMessaging.length ? (
                            formElement.config.displayMessaging.map(message => (<p key={message}>{message}</p>))
                            )
                             : null
                        }
                    </div>
                ))
            }
        </form>
    )
}


export default Form;