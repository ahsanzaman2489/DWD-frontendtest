import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {signupService} from "../services";
import {Input} from "components/Input";
import useForm from "hooks/useForm";
import {FormLayOut} from "../layout/form";
import {SelectBox} from "../components/SelectBox";
import {toast} from "react-toastify";

const SignUp = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    const schema = [
        {
            name: 'username',
            test: [{
                required: true,
                message: 'Username required'
            }],
        },
        {
            name: 'password',
            test: [{
                required: true,
                message: 'password required'
            }, {
                password: true,
                message: '8 characters, uppercase,lowercase and sp characters'
            }],

        }, {
            name: 'confirmPassword',
            test: [{
                required: true,
                message: 'password required'
            }, {
                confirmPassword: true,
                match: 'password',
                message: 'password not matched'
            }],
        },
        {
            name: 'role',
            test: [{
                required: true,
                message: 'role required'
            }],
            value: 'admin'
        }
    ]

    const submitForm = async (submit: boolean) => {
        setIsLoading(true)
        try {
            const response = await signupService(values)

            if (response.status === 200) {
                setIsLoading(false)
                navigate('/', {replace: true})
            }

        } catch (e) {
            setIsLoading(false)
            toast('something went wrong', {
                type: 'error',
                theme: 'colored'
            })
        }

    }
    const {handleChange, values, errors, handleSubmit}: any = useForm(schema, submitForm);

    return (
        <>
            <FormLayOut handleSubmit={handleSubmit} title={'Sign Up'} type={'signup'} isLoading={isLoading}>
                <>
                    <Input icon={'bx-user'}
                           type="text"
                           placeholder="User name"
                           onChange={handleChange}
                           name={'username'}
                           value={values.username}
                           error={errors.username}
                    />
                    <Input icon={'bx-lock-alt'}
                           type="password"
                           placeholder="Password"
                           name={'password'}
                           onChange={handleChange}
                           value={values.password}
                           error={errors.password}
                    />

                    <Input icon={'bx-lock-alt'}
                           type="password"
                           placeholder="confirm password"
                           name={'confirmPassword'}
                           onChange={handleChange}
                           value={values.confirmPassword}
                           error={errors.confirmPassword}
                    />

                    <SelectBox icon={'bx-user'}
                               placeholder="Role"
                               name={'role'}
                               onChange={handleChange}
                               value={values.role}
                               error={errors.role}
                               options={[{
                                   name: 'admin',
                                   value: 'admin'
                               }, {
                                   name: 'editor',
                                   value: 'editor'
                               }]}
                    />
                </>
            </FormLayOut>

        </>
    );
}

export default SignUp;
