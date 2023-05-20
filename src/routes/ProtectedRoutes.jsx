import { Navigate, Outlet } from 'react-router-dom';

export const ProtectedRoute = ({ isAllowed, children, redirectTo="/auth/login"}) => {
    
  if(!isAllowed){
    return <Navigate to={redirectTo}/>
  }
  return children ? children : <Outlet/>
};
