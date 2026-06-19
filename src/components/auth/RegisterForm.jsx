import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { errorToast, successToast } from "../../utils/toast";
import { register } from "../../api/authApi";



const RegisterForm = () => {
  const navigate = useNavigate();

  const [loading, setLoading] =
    useState(false);

  const [formData, setFormData] =
    useState({
      firstName: "",
      lastName: "",
      email: "",
      mobile: "",
      graduationYear: "",
      branch: "",
      company: "",
      designation: "",
      password: "",
      confirmPassword: "",
    });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (
    formData.password !==
    formData.confirmPassword
  ) {
    errorToast(
      "Passwords do not match"
    );
    return;
  }

  try {
    setLoading(true);

    const payload = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      password: formData.password,
      graduationYear: Number(
        formData.graduationYear
      ),
      branch: formData.branch,
    };

    await register(payload);

    successToast(
      "Registration Successful 🎉"
    );

    setTimeout(() => {
      navigate("/login");
    }, 1500);

  } catch (error) {

    console.log(error);

    errorToast(
      error?.response?.data?.message ||
      "Registration Failed"
    );

  } finally {
    setLoading(false);
  }
};

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4"
    >
      <div className="grid grid-cols-2 gap-4">

        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={
            formData.firstName
          }
          onChange={handleChange}
          className="border rounded-xl p-4"
          required
        />

        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={
            formData.lastName
          }
          onChange={handleChange}
          className="border rounded-xl p-4"
          required
        />
      </div>

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        className="w-full border rounded-xl p-4"
        required
      />

      <input
        type="text"
        name="mobile"
        placeholder="Mobile Number"
        value={formData.mobile}
        onChange={handleChange}
        className="w-full border rounded-xl p-4"
      />

      <div className="grid grid-cols-2 gap-4">

        <input
          type="number"
          name="graduationYear"
          placeholder="Batch"
          value={
            formData.graduationYear
          }
          onChange={handleChange}
          className="border rounded-xl p-4"
          required
        />

        <input
          type="text"
          name="branch"
          placeholder="Branch"
          value={formData.branch}
          onChange={handleChange}
          className="border rounded-xl p-4"
          required
        />
      </div>

      <input
        type="text"
        name="company"
        placeholder="Current Company"
        value={formData.company}
        onChange={handleChange}
        className="w-full border rounded-xl p-4"
      />

      <input
        type="text"
        name="designation"
        placeholder="Designation"
        value={
          formData.designation
        }
        onChange={handleChange}
        className="w-full border rounded-xl p-4"
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={
          formData.password
        }
        onChange={handleChange}
        className="w-full border rounded-xl p-4"
        required
      />

      <input
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password"
        value={
          formData.confirmPassword
        }
        onChange={handleChange}
        className="w-full border rounded-xl p-4"
        required
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
          disabled:bg-gray-400
          transition
        "
      >
        {loading
          ? "Creating Account..."
          : "Create Account"}
      </button>

      <p className="text-center">
        Already have account?

        <Link
          to="/login"
          className="
            ml-2
            text-blue-600
            hover:underline
          "
        >
          Login
        </Link>
      </p>
    </form>
  );
};

export default RegisterForm;