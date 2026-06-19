import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="min-h-screen bg-slate-100">

      <div className="grid lg:grid-cols-2 min-h-screen">

        {/* Left Side */}

        <div
          className="
          hidden
          lg:flex
          flex-col
          justify-center
          px-20
          bg-gradient-to-br
          from-blue-900
          via-blue-700
          to-indigo-700
          text-white
          "
        >
          <h1 className="text-6xl font-bold">
            BCE Alumni
          </h1>

          <p className="mt-8 text-xl">
            Connect with alumni, mentors and
            opportunities worldwide.
          </p>
        </div>

        {/* Right Side */}

        <div className="flex items-center justify-center p-6">
          <Outlet />
        </div>

      </div>
    </div>
  );
};

export default AuthLayout;