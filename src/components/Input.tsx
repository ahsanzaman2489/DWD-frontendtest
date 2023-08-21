import * as React from 'react';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    icon?: string,
    error?: string
}

export function Input(props: Props) {
    const {icon, error, ...rest} = props;
    return (
        <div>
            <div className="input_box">
                {icon && <i className={`bx ${icon} icon`}></i>}
                <input {...rest}/>
            </div>
            {error && <span className={'input_error'}>{error}</span>}
        </div>
    );
};