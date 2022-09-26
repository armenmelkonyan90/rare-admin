import { Routes, Route, Navigate} from 'react-router-dom';

import Login from '../Pages/Login';
// import Registration from '../Pages/Registration';
// import ForgotPassword from '../Pages/ForgotPassword';
// import CreatePassword from '../Pages/CreatePassword';
import Layout from '../Components/Layout';
// import NotFound from '../Pages/NotFound';
import { useSelector } from 'react-redux';

export function AuthRoutes() {
    const token = useSelector((state) => {
        return state.login.token;
    });

    return (
         <Routes>
            <Route path='/' element={<Layout />}>
                <Route path='/' element={<Navigate to='/auth/login' />} />
                <Route path='/auth/login' element={<Login />} />
                {/* <Route path='/auth/registration' element={<Registration />} />
                <Route path='/auth/forgot-password' element={<ForgotPassword />} />
                <Route path='/auth/create-password/:code' element={<CreatePassword />} />
                <Route path='*' element={token ? <NotFound /> : <Navigate to='/auth/login' />} /> */}
            </Route>
        </Routes>
    )

}
