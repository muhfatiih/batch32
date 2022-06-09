import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoute = () => {
  const fakeAuth = false;

  return fakeAuth ? <Outlet /> : <Navigate to="/" />;
};
