import * as React from 'react';
import {InputHTMLAttributes} from "react";

interface Props extends React.InputHTMLAttributes<HTMLSelectElement> {
    icon?: string,
    error?: string,
    options: any
}

export function SelectBox(props: Props) {
    const {icon, error, options = [], ...rest} = props;
    return (
        <>
            <div className="input_box">
                {icon && <i className={`bx ${icon} icon`}></i>}
                <select {...rest}>
                    {options.map((option: any, index: number) => <option value={option.value}
                                                                         key={option.name + index}>{option.name}</option>)}
                </select>
            </div>
            {error && <span className={'input_error'}>{error}</span>}
        </>
    );
};