import React, { Component } from "react";

import Form from "./../../components/Form/Form";
import Button from "./../../components/UI/Button/Button";

import LoginFormConfig from "./LoginFormConfig";
import IntroDisclaimer from "./../../components/IntroDisclaimer/IntroDisclaimer";

import { updateObject, checkValidity } from "./../../utility/index";

class Login extends Component {
    state = {
        LoginFormConfig: LoginFormConfig,
        formIsValid: false
    }

    onSubmitHandler = (event) => {
        event.preventDefault();
    }

    onSignInSelect = () => {
        this.props.history.push("/signup");
    }

    inputChangedHandler = (event, inputId) => {
        const updatedFormElement = updateObject(this.state.LoginFormConfig[inputId], {
            value: event.target.value,
            valid: checkValidity(
                event.target.value,
                this.state.LoginFormConfig[inputId].validation
            ),
            touched: true
        });

        const updatedInputForm = updateObject(this.state.LoginFormConfig, {
            [inputId]: updatedFormElement
        });

        let formIsValid = true;

        for (let inputId in updatedInputForm) {
            formIsValid = updatedInputForm[inputId].valid && formIsValid;
        }

        this.setState({
            LoginFormConfig: updatedInputForm,
            formIsValid: formIsValid
        });

    }

    render() {
        return (
            <div className="min-h-screen pt-10 flex items-center justify-center">
                <div className="max-w-md bg-white p-4 rounded-2xl shadow-2xl">
                    <IntroDisclaimer />
                    <Form
                        formConfig={this.state.LoginFormConfig}
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