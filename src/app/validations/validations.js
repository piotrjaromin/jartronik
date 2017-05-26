'use strict';


class FieldValidator {

    constructor(errors, value, fieldName, parentValidator) {
        this.value = value;
        this.errors = errors;
        this.fieldName = fieldName;
        this.parentValidator = parentValidator;
        this.optValue = false;
    }


    notBlank() {

        if (this.optValue && this.value.length == 0) {
            return this.parentValidator;
        }

        if (!this.value || this.value.length == 0) {
            this.errors[this.fieldName] = "Pole nie może być puste"
        }
        return this.parentValidator;
    }

    max(maxLen) {
        if (this.optValue && this.value.length == 0) {
            return this.parentValidator;
        }

        if (this.value.length > maxLen) {
            this.errors[this.fieldName] = `Pole nie może mieć więcej niż ${maxLen} znaków`
        }
        return this.parentValidator;
    }

    min(minLen) {
        if (this.optValue && this.value.length == 0) {
            return this.parentValidator;
        }

        if (this.value.length < minLen) {
            this.errors[this.fieldName] = `Pole nie może mieć mniej niż ${minLen} znaków`
        }
        return this.parentValidator;
    }

    between(minLen, maxLen) {
        if (this.optValue && this.value.length == 0) {
            return this.parentValidator;
        }

        if (this.value.length < minLen || this.value.length > maxLen) {
            this.errors[this.fieldName] = `Pole musi mieć pomiędzy ${minLen} a ${maxLen} znaków`
        }
        return this.parentValidator;
    }


    exact(exactLen) {
        if (this.optValue && this.value.length == 0) {
            return this.parentValidator;
        }

        if (this.value.length != exactLen) {
            this.errors[this.fieldName] = `Pole musi mieć ${exactLen} znaków`
        }

        return this.parentValidator;
    }

    email() {
        if (this.optValue && this.value.length == 0) {
            return this.parentValidator;
        }

        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(this.value)) {
            this.errors[this.fieldName] = `Nie poprawny email`
        }
        return this.parentValidator;
    }

    minVal(minVal) {
        if (this.optValue && this.value.length == 0) {
            return this.parentValidator;
        }

        if (typeof this.value != "number" || this.value < minVal) {
            this.errors[this.fieldName] = `Pole nie może być liczbą mniejszą od ${minVal}`
        }
        return this.parentValidator;
    }

    password() {
        if (this.optValue && this.value.length == 0) {
            return this.parentValidator;
        }

        let hasNumber = false;
        let hasUpperCase = false;
        let isFiveOrMore = this.value.length >= 5;

        for (let i = 0, len = this.value.length; i < len; i++) {
            const matches = this.value.match(/\d+/g);
            if (matches != null) {
                hasNumber = true;
            }

            if (/[A-Z]/.test(this.value[i])) {
                hasUpperCase = true;
            }
        }

        if (!( hasNumber && isFiveOrMore && hasUpperCase)) {
            this.errors[this.fieldName] = "Hasło musi mieć co najmniej 5 znaków, jedną dużą literę i jedną cyfrę"
        }

        return this.parentValidator
    }


    optional() {
        this.optValue = true;
        return this;
    }
}


class Validator {

    constructor(object) {
        this.errors = {};
        this.object = object
    }

    check(fieldName) {
        return new FieldValidator(this.errors, this.object[fieldName] || "", fieldName, this)
    }

    custom(fieldName, isValid, msg) {
        if (!isValid) {
            this.errors[fieldName] = msg
        }
        return this;
    }

    getErrors() {
        return Object.keys(this.errors).length > 0 ? this.errors : false;
    }
}

module.exports.Validator = Validator;