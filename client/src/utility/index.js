// * Generic update object function
export const updateObject = (oldObject, newProps) => {
    return {
        ...oldObject,
        ...newProps
    }
}

// * Form validation check
export const checkValidity = (value, rules, config = null) => {
    let isValid = true;
    let displayMessaging = [];

    if (!rules) {
        return isValid;
    }

    if (rules.required && rules.required.value) {
        isValid = value.trim() !== "" && isValid;

        if(!isValid) {
            displayMessaging.push(rules.required.message);
        }
    }

    if (rules.minLength) {
        isValid = value.length >= rules.minLength.value && isValid;

        if(!isValid) {
            displayMessaging.push(rules.minLength.message);
        }
    }

    if (rules.maxLength) {
        isValid = value.length <= rules.maxLength.value && isValid;

        if(!isValid) {
            displayMessaging.push(rules.maxLength.message);
        }
    }

    if (rules.isEmail && rules.isEmail.value) {
        const pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        isValid = pattern.test(value) && isValid;

        if(!isValid) {
            displayMessaging.push(rules.isEmail.message);
        }
    }

    if (rules.isNumeric && rules.isNumeric.value) {
        const pattern = /^\d+$/;
        isValid = pattern.test(value) && isValid;

        if(!isValid) {
            displayMessaging.push(rules.isNumeric.message);
        }
    }

    if(rules.equalTo && rules.equalTo.value && config) {
        isValid = value.trim() === config[rules.equalTo.value].value.trim() && isValid;

        if(!isValid) {
            displayMessaging.push(rules.equalTo.message);
        }
    }

    return {isValid, displayMessaging};
}