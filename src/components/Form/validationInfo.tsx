export default function validateInfo(values: any) {
    let errors: any = {};

    if (!values.username) {
        errors.username = "Username required"
    }

    if (!values.email) {
        errors.email = 'Email required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = "Email address is invalid";
    }

    if (!values.password) {
        errors.password = 'Password is required';

    } else if (values.password.length < 6) {
        errors.password = 'Password needs to be 6 characters or more';
    }

    if (!values.password2) {
        errors.password2 = 'Password is required';
    } else if (values.password !== values.password2) {
        errors.passsword2 = 'Passwords do not match';
    }

    return errors;
}