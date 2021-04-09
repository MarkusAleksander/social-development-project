const SignupFormConfig = {
    forename: {
        elementType: "input",
        elementConfig: {
            type: "text",
            placeholder: "Forename"
        },
        value: "",
        validation: {
            required: true,
            minLength: 2
        },
        valid: false,
        touched: false
    },
    surname: {
        elementType: "input",
        elementConfig: {
            type: "text",
            placeholder: "Surname"
        },
        value: "",
        validation: {
            required: true,
            minLength: 2
        },
        valid: false,
        touched: false
    },
    email: {
        elementType: "input",
        elementConfig: {
            type: "email",
            placeholder: "Email Address"
        },
        value: "",
        validation: {
            required: true,
            isEmail: true
        },
        valid: false,
        touched: false
    },
    password: {
        elementType: "input",
        elementConfig: {
            type: "password",
            placeholder: "Password"
        },
        value: "",
        validation: {
            required: true,
            minLength: 6
        },
        valid: false,
        touched: false
    }
}

export default SignupFormConfig;