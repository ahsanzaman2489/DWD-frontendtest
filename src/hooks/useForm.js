import {useState} from 'react'
import {isEmpty, omit} from 'lodash'

const useForm = (schema, callback) => {

    const initialValues = schema.reduce((acc, curr) => {
        return {
            ...acc,
            [curr.name]: curr.value ? curr.value : ''
        }
    }, {})//Creating InitialValues

    const tests = schema.reduce((acc, curr) => {
        return {
            ...acc,
            [curr.name]: curr.test
        }
    }, {})//Creating test

    //Values
    const [values, setValues] = useState({...initialValues});
    //Errors
    const [errors, setErrors] = useState({});

    const validate = (name, value) => {
        //A function to validate each input values


        if (tests[name]) {

            for (const test of tests[name]) {

                if ('required' in test && value.length === 0) {
                    return {
                        [name]: test.message ? test.message : `${name} is required field`,
                    }
                    //Required Validation
                }

                if ('confirmPassword' in test && value !== values[test.match]) {
                    return {
                        [name]: test.message ? test.message : `${name} should be same as password`,
                    }
                    //Confirm password to match with password field Validation
                }

                if ('password' in test && !new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[!@#\$%\^\&*\)\(+=._-]).{8,}$/).test(value)) {
                    return {
                        [name]: test.message ? test.message : `${name} invalid password`,
                    }
                    //Password Validation for required combination
                }

                setErrors(omit(errors, name))

            }
        }
    }

    //A method to handle form inputs
    const handleChange = (event) => {
        //To stop default events
        event.persist();
        const element = event.currentTarget;

        let name = element.name;
        let val = element.value;

        const newErrors = validate(name, val);

        setErrors(prevState => {
            return {
                ...prevState,
                ...newErrors
            }
        })
        //Let's set these values in state
        setValues({
            ...values,
            [name]: val,
        })

    }

    const handleSubmit = (event) => {

        if (event) event.preventDefault();
        let newErrors = {}
        for (let key in values) {
            const error = validate(key, values[key])
            newErrors = {...newErrors, ...error};
        }
        setErrors(newErrors)

        if (isEmpty(newErrors) && !isEmpty(values)) {
            callback();
        } else {

        }

    }


    return {
        values,
        errors,
        handleChange,
        handleSubmit
    }
}

export default useForm