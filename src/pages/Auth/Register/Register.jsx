import { Navigate } from "react-router-dom";
import AuthCard from "../../../components/auth/AuthCard";
import RegisterForm from "../../../components/auth/RegisterForm";

const Register = () => {
  const token = localStorage.getItem("token");

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  if (token && user) {

    if (user.role === "ADMIN") {
      return <Navigate to="/admin" replace />;
    }

    return <Navigate to="/dashboard" replace />;
  }

  return (
    <AuthCard
      title="Join BCE Alumni"
      subtitle="Create your alumni account"
    >
      <RegisterForm />
    </AuthCard>
  );
};

export default Register;