import { useState } from "react";

import {
  successToast,
  errorToast,
} from "../../utils/toast";
import { changePassword } from "../../api/userApi";

const Settings = () => {

  const [passwordData, setPasswordData] =
    useState({
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    });
    const [loading, setLoading] =
  useState(false);

  const handleChange = (e) => {

    setPasswordData({
      ...passwordData,
      [e.target.name]:
        e.target.value,
    });
  };

  const handlePasswordUpdate =
  async (e) => {

    e.preventDefault();

    if (
      passwordData.newPassword.length < 6
    ) {

      return errorToast(
        "Password must be at least 6 characters"
      );
    }

    if (
      passwordData.newPassword !==
      passwordData.confirmPassword
    ) {

      return errorToast(
        "Passwords do not match"
      );
    }

    try {

      setLoading(true);

      await changePassword({
        oldPassword:
          passwordData.oldPassword,
        newPassword:
          passwordData.newPassword,
      });

      successToast(
        "Password updated successfully"
      );

      setPasswordData({
        oldPassword: "",
        newPassword: "",
        confirmPassword: "",
      });

    } catch (error) {

      console.error(error);

      errorToast(
        error?.response?.data?.message ||
        "Failed to update password"
      );

    } finally {

      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">

      <h1 className="text-4xl font-bold mb-8">
        Settings
      </h1>

      {/* Change Password */}

      <div
        className="
        bg-white
        rounded-3xl
        shadow
        p-8
        mb-8
        "
      >

        <h2 className="text-2xl font-bold mb-6">
          Change Password
        </h2>

        <form
          onSubmit={
            handlePasswordUpdate
          }
          className="space-y-4"
        >

          <input
            type="password"
            name="oldPassword"
            placeholder="Current Password"
            value={
              passwordData.oldPassword
            }
            onChange={handleChange}
            className="
            w-full
            border
            rounded-xl
            p-4
            "
            required
          />

          <input
            type="password"
            name="newPassword"
            placeholder="New Password"
            value={
              passwordData.newPassword
            }
            onChange={handleChange}
            className="
            w-full
            border
            rounded-xl
            p-4
            "
            required
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={
              passwordData.confirmPassword
            }
            onChange={handleChange}
            className="
            w-full
            border
            rounded-xl
            p-4
            "
            required
          />

          <button
  type="submit"
  disabled={loading}
  className="
  bg-blue-600
  text-white
  px-6
  py-3
  rounded-xl
  hover:bg-blue-700
  disabled:bg-gray-400
  "
>
  {loading
    ? "Updating..."
    : "Update Password"}
</button>

        </form>

      </div>

      {/* Notifications */}

      <div
        className="
        bg-white
        rounded-3xl
        shadow
        p-8
        mb-8
        "
      >

        <h2 className="text-2xl font-bold mb-6">
          Notifications
        </h2>

        <div className="space-y-4">

          <label className="flex items-center gap-3">

            <input
              type="checkbox"
              defaultChecked
            />

            Email Notifications

          </label>

          <label className="flex items-center gap-3">

            <input
              type="checkbox"
              defaultChecked
            />

            Event Updates

          </label>

          <label className="flex items-center gap-3">

            <input
              type="checkbox"
              defaultChecked
            />

            Job Alerts

          </label>

        </div>

      </div>

      {/* Privacy */}

      <div
        className="
        bg-white
        rounded-3xl
        shadow
        p-8
        "
      >

        <h2 className="text-2xl font-bold mb-6">
          Privacy
        </h2>

        <div className="space-y-4">

          <label className="flex items-center gap-3">

            <input
              type="checkbox"
              defaultChecked
            />

            Show Email Publicly

          </label>

          <label className="flex items-center gap-3">

            <input
              type="checkbox"
              defaultChecked
            />

            Allow Alumni Connections

          </label>

        </div>

      </div>

    </div>
  );
};

export default Settings;