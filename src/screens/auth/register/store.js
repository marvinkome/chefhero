import { observable, action } from 'mobx';
import { Alert } from 'react-native';
import { validator } from 'src/lib';

export class SignUpStore {
    @observable
    fields = {
        firstname: '',
        lastname: '',
        emailAddress: '',
        password: '',
        confirm_password: ''
    };

    @observable
    errors = {
        firstname: '',
        lastname: '',
        emailAddress: '',
        password: '',
        confirm_password: ''
    };

    @action
    onChange = (field, value) => {
        this.fields[field] = value;
    };

    onChangeError = (field, value) => {
        this.errors[field] = value;
    };

    validateForm = () => {
        const fields = this.fields;
        let formIsValid = true;

        if (validator.text(fields.firstname)) {
            formIsValid = false;
            this.onChangeError('firstname', 'Please enter your firstname');
        } else {
            this.onChangeError('firstname', '');
        }

        if (validator.text(fields.lastname)) {
            formIsValid = false;
            this.onChangeError('lastname', 'Please enter your firstname');
        } else {
            this.onChangeError('lastname', '');
        }

        if (validator.text(fields.emailAddress)) {
            formIsValid = false;
            this.onChangeError('emailAddress', 'Please enter your email');
        } else if (!validator.isEmail(fields.emailAddress)) {
            formIsValid = false;
            this.onChangeError('emailAddress', 'Please enter a valid email');
        } else {
            this.onChangeError('emailAddress', '');
        }

        if (validator.text(fields.password)) {
            formIsValid = false;
            this.onChangeError('password', 'Please enter your password');
        } else if (
            !validator.text(fields.password) &&
            !validator.is_equal(fields.confirm_password, fields.password)
        ) {
            formIsValid = false;
            this.onChangeError('password', '');
            this.onChangeError('confirm_password', 'Not same as the password above');
        } else {
            this.onChangeError('password', '');
            this.onChangeError('confirm_password', '');
        }

        return formIsValid;
    };

    @action
    submit = () => {
        if (!this.validateForm()) return;
        Alert.alert('Form Response', 'All inputs are valid your account will be created');
    };
}
