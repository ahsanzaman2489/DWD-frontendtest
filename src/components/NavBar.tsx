import * as React from 'react';
import 'styles/navbar.scss'
import {useDispatch, useSelector} from "react-redux";
import {logOut} from 'store/actions'

export function NavBar() {
    const user = useSelector((state: any) => state.user)
    const dispatch = useDispatch()

    return (
        <section className="navigation">
            <div className="nav-container">
                <div className="brand">
                    <a href="#!">Front end test</a>
                </div>
                <nav>
                    {user.isAuthenticated && <ul className="nav-list">
                        <li onClick={() => dispatch(logOut())}>Logout</li>
                    </ul>}
                </nav>
            </div>
        </section>
    );
};