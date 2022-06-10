import { Navigate, Outlet } from "react-router-dom";

export const PrivateRouteAdmin = () => {
  const fakeAuth = false;

  return fakeAuth ? <Outlet /> : <Navigate to="/" />;
};

export const PrivateRouteCos = () => {
  const isLogin = true;

  return isLogin ? <Outlet /> : <Navigate to="/" />;
};
