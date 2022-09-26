import { Routes, Route, Navigate } from 'react-router-dom';

import Dashboard from '../Pages/Dashboard';
import AllUser from '../Pages/User/AllUser';
import ViewUser from '../Pages/User/ViewUser';
import Ads from '../Pages/Ads';
import Statistics from '../Pages/Statistics';
import Settings from '../Pages/Settings';
import Notice from '../Pages/Notice';

export function MainRouter() {
    return (
        <Routes>
        <Route path='/' element={<Dashboard />}>
            {/* <Route path='/' element={<Navigate to='dashboard' />} /> */}
            <Route path='dashboard' element={<Navigate to='/' />} />

            <Route path='all-users' element={<AllUser />} /> 
            <Route exact  path='view-user/:id' element={<ViewUser />} />  

            <Route path='ads' element={<Ads />} />
                
            <Route path='statistic' element={<Statistics />} />  
            <Route path='settings' element={<Settings />} />  
            <Route path='notice' element={<Notice />} />  
            <Route path='/auth/login' element={<Navigate to='/dashboard' />}/>



        </Route>

            {/* <Route path='*' element={<NotFound />} /> */}
        </Routes>
    )

}