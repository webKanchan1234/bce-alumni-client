const AuthCard = ({ title, subtitle, children }) => {
  return (
    <div
      className="
      bg-white
      w-full
      max-w-md
      p-8
      rounded-3xl
      shadow-xl
      "
    >
      <h2 className="text-3xl font-bold">
        {title}
      </h2>

      <p className="text-gray-500 mt-2 mb-8">
        {subtitle}
      </p>

      {children}
    </div>
  );
};

export default AuthCard;