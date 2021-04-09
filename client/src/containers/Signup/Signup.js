import React, { Component } from "react";

import Form from "./../../components/Form/Form";
import Button from "./../../components/UI/Button/Button";

import SignupFormConfig from "./SignupFormConfig";
import IntroDisclaimer from "./../../components/IntroDisclaimer/IntroDisclaimer";

import { updateObject, checkValidity } from "./../../utility/index";

class Signup extends Component {
    state = {
        signupFormConfig: SignupFormConfig,
        formIsValid: false
    }

    onSubmitHandler = (event) => {
        event.preventDefault();
    }

    onLoginSelect = () => {
        this.props.history.push("/login");
    }

    inputChangedHandler = (event, inputId) => {
        const updatedFormElement = updateObject(this.state.signupFormConfig[inputId], {
            value: event.target.value,
            valid: checkValidity(
                event.target.value,
                this.state.signupFormConfig[inputId].validation
            ),
            touched: true
        });

        const updatedInputForm = updateObject(this.state.signupFormConfig, {
            [inputId]: updatedFormElement
        });

        let formIsValid = true;

        for (let inputId in updatedInputForm) {
            formIsValid = updatedInputForm[inputId].valid && formIsValid;
        }

        this.setState({
            signupFormConfig: updatedInputForm,
            formIsValid: formIsValid
        });

    }

    render() {
        return (
            <div className="min-h-screen pt-10 flex items-center justify-center">
                <div className="max-w-md bg-white p-4 rounded-2xl shadow-2xl">
                    <IntroDisclaimer />
                    <Form
                        formConfig={this.state.signupFormConfig}
                        onSubmitHandler={this.onSubmitHandler}
                        inputChangedHandler={this.inputChangedHandler}
                    />
                    <div className="flex items-center justify-around">
                        <Button onclick={this.onSubmitHandler} btnType="primary">Login</Button>
                        <Button onclick={this.onLoginSelect}>Login</Button>
                    </div>
                </div>
            </div>
        );
    }
};

export default Signup;