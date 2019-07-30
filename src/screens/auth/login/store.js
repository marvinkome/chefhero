import { observable, action } from 'mobx';
import { Alert } from 'react-native';
import { validator } from 'src/lib';

export class LoginStore {
    @observable
    fields = {
        emailAddress: '',
        password: ''
    };

    @observable
    errors = {
        emailAddress: '',
        password: ''
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
