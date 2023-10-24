import { Outlet, Navigate } from "react-router-dom";
import { useUser } from "./UserProvider";

const PrivateRoute = () => {
  const { user } = useUser();
  return user ? <Outlet /> : <Navigate to="/Signin" />;
};

export default PrivateRoute;
