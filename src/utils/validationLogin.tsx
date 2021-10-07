const validateLogin = (values: any): Object => {
    let errors: any = {};

    if (!values.username) {
        errors.username = 'Username required';
    }

    if (!values.password) {
        errors.password = 'Password required';
    }
    return errors;
}

export default validateLogin;