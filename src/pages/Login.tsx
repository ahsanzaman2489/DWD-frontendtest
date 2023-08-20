import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {setLogin} from 'store/actions'

const Login = () => {
    const dispatch = useDispatch()

    return (
        <div onClick={() => dispatch(setLogin({}))}>Login</div>
    );
}

export default Login;
