import { Navigate,Outlet } from "react-router-dom";
import { useAuth } from "./auth";

const ProtectedRoutes = () => {
    const isAuth = useAuth();
    return (isAuth ? <Outlet/> : <Navigate to="/"/>

    )
};
export default ProtectedRoutes;