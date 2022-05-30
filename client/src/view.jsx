import Login from './component/login/login';
import Register from './component/register/register';
import Dashboard from './component/dashboard/dashboard';
import { Route, Routes } from 'react-router-dom';

import ProtectedRoutes from './ProtectedRoutes';
import { AuthProvider } from './auth';


const Views = () => {
    
    return (
        <AuthProvider>
        <Routes>
          <Route exact path='/' element={<Login/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route element={<ProtectedRoutes />}>
            <Route path='/dashboard' element={<Dashboard/>}/> 
          </Route>
        </Routes>
        </AuthProvider>
    );
};
export default Views