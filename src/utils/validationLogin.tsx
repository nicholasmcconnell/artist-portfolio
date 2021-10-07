const validateLogin = (values: any): Object => {
    let errors: any = {};

    if (!values.email) {
        errors.email = 'Email required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = "Email address is invalid";
    }

    if (!values.password) {
        errors.password = 'Password is required';
    }
    return errors;
}

export default validateLogin;