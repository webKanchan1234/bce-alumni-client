import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div
      className="
      min-h-screen
      flex
      flex-col
      items-center
      justify-center
      bg-slate-100
      "
    >
      <h1
        className="
        text-8xl
        font-bold
        text-blue-600
        "
      >
        404
      </h1>

      <p
        className="
        text-xl
        text-gray-600
        mt-4
        "
      >
        Page Not Found
      </p>

      <Link
        to="/"
        className="
        mt-6
        bg-blue-600
        text-white
        px-6
        py-3
        rounded-xl
        "
      >
        Back Home
      </Link>
    </div>
  );
};

export default NotFound;