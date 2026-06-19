import { useState } from "react";




import { useNavigate } from "react-router-dom";
import { forgotPassword, verifyResetOtp } from "../../../utils/auth";
import { errorToast, successToast } from "../../../utils/toast";

const ForgotPassword = () => {

  const navigate =
    useNavigate();

  const [step, setStep] =
    useState(1);

  const [email, setEmail] =
    useState("");

  const [otp, setOtp] =
    useState("");

  const [newPassword,
    setNewPassword] =
    useState("");

  const [loading,
    setLoading] =
    useState(false);

  const sendOtp =
    async () => {

      try {

        setLoading(true);

        await forgotPassword(
          email
        );

        successToast(
          "OTP sent successfully"
        );

        setStep(2);

      } catch {

        errorToast(
          "Failed to send OTP"
        );

      } finally {

        setLoading(false);
      }
    };

  const verifyOtp =
    async () => {

      try {

        setLoading(true);

        await verifyResetOtp(
          email,
          otp
        );

        successToast(
          "OTP verified"
        );

        setStep(3);

      } catch {

        errorToast(
          "Invalid OTP"
        );

      } finally {

        setLoading(false);
      }
    };

  const updatePassword =
    async () => {

      try {

        setLoading(true);

        await resetPassword(
          email,
          otp,
          newPassword
        );

        successToast(
          "Password reset successfully"
        );

        navigate("/login");

      } catch {

        errorToast(
          "Failed to reset password"
        );

      } finally {

        setLoading(false);
      }
    };

  return (

    <div
      className="
      min-h-screen
      flex
      items-center
      justify-center
      bg-slate-100
      px-4
      "
    >

      <div
        className="
        bg-white
        p-8
        rounded-3xl
        shadow-xl
        w-full
        max-w-md
        "
      >

        <h1
          className="
          text-3xl
          font-bold
          mb-6
          text-center
          "
        >
          Forgot Password
        </h1>

        {step === 1 && (

          <>
            <input
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) =>
                setEmail(
                  e.target.value
                )
              }
              className="
              w-full
              border
              p-4
              rounded-xl
              mb-4
              "
            />

            <button
              onClick={sendOtp}
              disabled={loading}
              className="
              w-full
              bg-blue-600
              text-white
              py-4
              rounded-xl
              "
            >
              Send OTP
            </button>
          </>
        )}

        {step === 2 && (

          <>
            <input
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) =>
                setOtp(
                  e.target.value
                )
              }
              className="
              w-full
              border
              p-4
              rounded-xl
              mb-4
              "
            />

            <button
              onClick={verifyOtp}
              disabled={loading}
              className="
              w-full
              bg-green-600
              text-white
              py-4
              rounded-xl
              "
            >
              Verify OTP
            </button>
          </>
        )}

        {step === 3 && (

          <>
            <input
              type="password"
              placeholder="New Password"
              value={
                newPassword
              }
              onChange={(e) =>
                setNewPassword(
                  e.target.value
                )
              }
              className="
              w-full
              border
              p-4
              rounded-xl
              mb-4
              "
            />

            <button
              onClick={
                updatePassword
              }
              disabled={loading}
              className="
              w-full
              bg-blue-600
              text-white
              py-4
              rounded-xl
              "
            >
              Reset Password
            </button>
          </>
        )}

      </div>

    </div>
  );
};

export default ForgotPassword;