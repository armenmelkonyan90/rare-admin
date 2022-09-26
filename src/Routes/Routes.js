import React, { useEffect } from 'react';
import { BrowserRouter} from 'react-router-dom';
import { useSelector } from 'react-redux';


import { AuthRoutes } from './index';
import { MainRouter } from './MainRoutes';

export function AppRoutes() {
    const token = useSelector((state) => {
        return state.login.token;
    })
    useEffect(() => {
    }, [token])
    return (
        <BrowserRouter>
            {
            !token ? <AuthRoutes /> : <MainRouter />

            }
        </BrowserRouter>
    )
}
