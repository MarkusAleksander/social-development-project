const LoginFormConfig = {
    email: {
        elementType: "input",
        elementConfig: {
            type: "email",
            placeholder: "Email Address"
        },
        value: "",
        validation: {
            required: {
                value: true,
                message: "Email is required"
            },
            isEmail: {
                value: true,
                message: "Email must be a valid email format"
            },
        },
        valid: false,
        touched: false,
        displayMessaging: []
    },
    password: {
        elementType: "input",
        elementConfig: {
            type: "password",
            placeholder: "Password"
        },
        value: "",
        validation: {
            required: {
                value:true,
                message: "Password is required"
            },
            minLength: {
                value:6,
                message: "Surname must be 6 characters or more"
            },
        },
        valid: false,
        touched: false,
        displayMessaging: []
    }
}

export default LoginFormConfig;