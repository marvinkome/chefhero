import Validator from 'validator';

export const validator = {
    cardNumber: (value) => Validator.isCreditCard(value) || value.length >= 12,
    isEmail: (value) => Validator.isEmail(value),
    cvc: (value) => value.length === 3,
    exp_year: (value) => value > 18 && value < 100,
    exp_month: (value) => value > 0 && value < 13,
    text: (value) => Validator.isEmpty(value),
    is_equal: (value, comparator) => Validator.equals(value, comparator),
    isPhoneNumber: (value) => {
        let final = value.replace(/\s/g, '');
        if (final.length === 11) final = final.substr(1, 10);
        return Validator.isMobilePhone(`+234${final}`);
    }
};