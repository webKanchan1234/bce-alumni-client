import { Navigate } from "react-router-dom";
import AuthCard from "../../../components/auth/AuthCard";
import LoginForm from "../../../components/auth/LoginForm";
import { isAuthenticated } from "../../../utils/auth";

const Login = () => {

  const token = localStorage.getItem("token");

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  if (token && user) {

    if (user.role === "ADMIN") {
      return <Navigate to="/admin" replace />;
    }

    if (user.role === "ALUMNI") {
      return <Navigate to="/dashboard" replace />;
    }

    if (user.role === "STUDENT") {
      return <Navigate to="/dashboard" replace />;
    }
  }
  return (
    <AuthCard
      title="Welcome Back"
      subtitle="Login to BCE Alumni Portal"
    >
      <LoginForm />
    </AuthCard>
  );
};

export default Login;