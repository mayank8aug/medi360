export const isNotEmpty = value => {
    if (!value) {
        return 'This field is required';
    }
}

export const isValidEmail = value => {
    const requiredError = isNotEmpty(value);
    if (requiredError) return requiredError;
    if (!value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
        return 'Invalid email format';
    }
}