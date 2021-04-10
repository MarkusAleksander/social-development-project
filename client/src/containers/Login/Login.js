import React, { Component } from "react";

import Form from "./../../components/Form/Form";
import Button from "./../../components/UI/Button/Button";

import loginFormConfig from "./LoginFormConfig";
import IntroDisclaimer from "./../../components/IntroDisclaimer/IntroDisclaimer";

import { updateObject, checkValidity } from "./../../utility/index";

class Login extends Component {
    state = {
        loginFormConfig: loginFormConfig,
        formIsValid: false
    }

    onSubmitHandler = (event) => {
        event.preventDefault();
    }

    onSignInSelect = () => {
        this.props.history.push("/signup");
    }

    inputChangedHandler = (event, inputId) => {

        let validity = checkValidity(
            event.target.value,
            this.state.loginFormConfig[inputId].validation,
            this.state.loginFormConfig
        );

        const updatedFormElement = updateObject(this.state.loginFormConfig[inputId], {
            value: event.target.value,
            valid: validity.isValid,
            displayMessaging: validity.displayMessaging,
            touched: true
        });

        const updatedInputForm = updateObject(this.state.loginFormConfig, {
            [inputId]: updatedFormElement
        });

        let formIsValid = true;

        for (let inputId in updatedInputForm) {
            formIsValid = updatedInputForm[inputId].valid && formIsValid;
        }

        this.setState({
            loginFormConfig: updatedInputForm,
            formIsValid: formIsValid
        });

    }

    render() {
        return (
            <div className="min-h-screen pt-10 flex items-center justify-center">
                <div className="max-w-md bg-white p-4 rounded-2xl shadow-2xl">
                    <IntroDisclaimer />
                    <Form
                        formConfig={this.state.loginFormConfig}
                        onSubmitHandler={this.onSubmitHandler}
                        inputChangedHandler={this.inputChangedHandler}
                    />
                    <div className="flex items-center justify-around">
                        <Button onclick={this.onSubmitHandler} btnType="primary">Login</Button>
                        <Button onclick={this.onSignInSelect}>Sign Up</Button>
                    </div>
                </div>
            </div>
        );
    }
};

export default Login;