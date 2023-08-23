import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {logOut, setLogin} from 'store/actions'
import {useNavigate} from 'react-router-dom';
import {loginService} from "../services";
import {Input} from "components/Input";
import useForm from "hooks/useForm";
import {FormLayOut} from "../layout/form";
import {toast} from "react-toastify";
import 'styles/login.scss'

const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const schema = [
        {
            name: 'username',
            test: [{
                required: true,
                message: 'Username required'
            }]
        },
        {
            name: 'password',
            test: [{
                required: true,
                message: 'password required'
            }],
        }
    ]

    useEffect(() => {
        dispatch(logOut())
    }, []);

    const [isLoading, setIsLoading] = useState(false);


    const submitForm = async () => {
        setIsLoading(true)
        try {
            const response = await loginService(values)

            if (response.status === 200) {
                setIsLoading(false)
                dispatch(setLogin(response.data))
                navigate('/home', {replace: true})
            }

        } catch (e) {
            setIsLoading(false)
            toast('wrong username or password', {
                type: 'error',
                theme: 'colored'
            })
        }

    }
    const {handleChange, values, errors, handleSubmit}: any = useForm(schema, submitForm);

    return (
        <>
            <FormLayOut handleSubmit={handleSubmit} title={'Login'} type={'login'} isLoading={isLoading}>
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
                </>
            </FormLayOut>
        </>
    );
}

export default Login;
