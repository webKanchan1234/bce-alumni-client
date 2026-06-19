const MembershipCard = ({ plan }) => {
  return (
    <div
      className={`
      rounded-3xl
      p-8
      shadow-xl
      bg-white
      relative
      ${
        plan.popular
          ? "border-4 border-blue-600"
          : ""
      }
      `}
    >
      {plan.popular && (
        <span
          className="
          absolute
          top-4
          right-4
          bg-blue-600
          text-white
          px-4
          py-1
          rounded-full
          text-sm
          "
        >
          Most Popular
        </span>
      )}

      <h3 className="text-3xl font-bold">
        {plan.name}
      </h3>

      <p className="text-gray-500 mt-2">
        {plan.badge}
      </p>

      <h2 className="text-5xl font-bold mt-6">
        ₹{plan.price}
      </h2>

      <ul className="mt-8 space-y-3">

        {plan.features.map((feature) => (
          <li key={feature}>
            ✓ {feature}
          </li>
        ))}

      </ul>

      <button
        className="
        w-full
        mt-8
        bg-blue-600
        text-white
        py-3
        rounded-xl
        "
      >
        Join Now
      </button>

    </div>
  );
};

export default MembershipCard;