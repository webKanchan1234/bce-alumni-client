import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { login } from "../../api/authApi";

const LoginForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      const response = await login(formData);

      const user = response.data;

      localStorage.setItem(
        "token",
        user.token
      );

      localStorage.setItem(
        "user",
        JSON.stringify(user)
      );

      if (user.role === "ADMIN") {
        navigate("/admin");
      } else {
        navigate("/dashboard");
      }

    } catch (err) {
      console.error(err);

      setError(
        err.response?.data?.message ||
        "Invalid email or password"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5"
    >
      {error && (
        <div
          className="
          bg-red-100
          text-red-700
          p-3
          rounded-xl
          "
        >
          {error}
        </div>
      )}

      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email Address"
        required
        className="
        w-full
        border
        rounded-xl
        p-4
        focus:outline-none
        focus:ring-2
        focus:ring-blue-500
        "
      />

      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Password"
        required
        className="
        w-full
        border
        rounded-xl
        p-4
        focus:outline-none
        focus:ring-2
        focus:ring-blue-500
        "
      />

      <button
        type="submit"
        disabled={loading}
        className="
        w-full
        bg-blue-600
        text-white
        p-4
        rounded-xl
        hover:bg-blue-700
        transition
        disabled:bg-gray-400
        "
      >
        {loading ? "Logging In..." : "Login"}
      </button>

      <div className="flex justify-between">
        <Link
          to="/forgot-password"
          className="text-blue-600 hover:underline"
        >
          Forgot Password?
        </Link>

        <Link
          to="/register"
          className="text-blue-600 hover:underline"
        >
          Register
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;