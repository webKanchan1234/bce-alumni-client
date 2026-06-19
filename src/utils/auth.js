export const isAuthenticated = () => {
  return !!localStorage.getItem("token");
};

export const getUser = () => {
  return JSON.parse(
    localStorage.getItem("user")
  );
};


export const getRedirectPath = () => {

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  if (!user) return "/login";

  switch (user.role) {

    case "ADMIN":
      return "/admin";

    case "ALUMNI":
      return "/dashboard";

    case "STUDENT":
      return "/dashboard";

    default:
      return "/login";
  }
};

export const logout = () => {

  localStorage.removeItem("token");
  localStorage.removeItem("user");

  window.location.href = "/";
};


export const forgotPassword = (email) =>
  api.post(
    "/auth/forgot-password",
    { email }
  );

export const verifyResetOtp = (
  email,
  otp
) =>
  api.post(
    "/auth/verify-reset-otp",
    {
      email,
      otp,
    }
  );

export const resetPassword = (
  email,
  otp,
  newPassword
) =>
  api.post(
    "/auth/reset-password",
    {
      email,
      otp,
      newPassword,
    }
  );