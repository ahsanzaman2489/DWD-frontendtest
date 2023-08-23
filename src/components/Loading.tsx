import * as React from 'react';
import 'styles/loading.scss';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    icon?: string,
    error?: string
}

export function Loading(props: Props) {
    const {icon, error, ...rest} = props;
    return (
        <div className={'loading-container'}>
            <i className={'bx bx-loader-alt bx-spin bx-rotate-90 icon'}></i>
        </div>
    );
};