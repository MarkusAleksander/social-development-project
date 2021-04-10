const SignupFormConfig = {
    forename: {
        elementType: "input",
        elementConfig: {
            type: "text",
            placeholder: "Forename"
        },
        value: "",
        validation: {
            required: {
                value: true,
                message: "Forename is required"
            },
            minLength: {
                value: 2,
                message: "Forename must be 2 characters or more"
            },
        },
        valid: false,
        touched: false,
        displayMessaging: []
    },
    surname: {
        elementType: "input",
        elementConfig: {
            type: "text",
            placeholder: "Surname"
        },
        value: "",
        validation: {
            required: {
                value: true,
                message: "Surname is required"
            },
            minLength: {
                value: 2,
                message: "Surname must be 2 characters or more"
            },
        },
        valid: false,
        touched: false,
        displayMessaging: []
    },
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
    },
    retypePassword: {
        elementType: "input",
        elementConfig: {
            type: "password",
            placeholder: "Retype Password"
        },
        value: "",
        validation: {
            required: {
                value:true,
                message: "Retype Password is required"
            },
            minLength: {
                value:6,
                message: "Retype Password must be 6 characters or more"
            },
            equalTo: {
                value: "password",
                message: "Must match entered password"
            },
        },
        valid: false,
        touched: false,
        displayMessaging: []
    }
}

export default SignupFormConfig;