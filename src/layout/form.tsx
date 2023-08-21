import * as React from 'react';
import {Link} from 'react-router-dom';

type Props = {
    title: string;
    handleSubmit: any;
    type: string;
    children: React.ReactElement,
    isLoading?: boolean
};

export function FormLayOut({handleSubmit, title, type, isLoading, children}: Props) {
    return (
        <div className="login">
            <div className="login__content">
                <div className="login__forms">
                    <form className="login__registre" id="login-in" onSubmit={handleSubmit}>
                        <h1 className="login__title">{title}</h1>
                        {children}

                        <button type="submit" className="login__button" disabled={isLoading}>{isLoading ?
                            <i className={'bx bx-loader icon'}>
                            </i> : title}
                        </button>

                        {type === 'login' && (<>
                            <div>
                                <span className="login__account">Don't have an Account ?</span>
                                <span className="login__signin" id="sign-up"><Link to={'/signup'}>Sign Up</Link></span>
                            </div>
                        </>)
                        }

                        {type === 'signup' && (<>
                            <div>
                                <span className="login__account">Already have an Account ?</span>
                                <span className="login__signin" id="sign-up"><Link to={'/'}>Login</Link></span>
                            </div>
                        </>)}

                    </form>
                </div>
            </div>
        </div>
    );
};