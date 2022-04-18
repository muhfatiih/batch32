import { Navigate } from "react-router-dom";

export const PrivateRoute = (props) => {
  const fakeAuth = true;

  if (!fakeAuth) return <Navigate to="/" replace />;

  return props.children;
};
