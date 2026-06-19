import {
  FaUsers,
  FaBuilding,
  FaGlobe,
  FaGraduationCap,
} from "react-icons/fa";

const stats = [
  {
    icon: <FaUsers />,
    value: "15000+",
    title: "Alumni",
  },
  {
    icon: <FaBuilding />,
    value: "500+",
    title: "Companies",
  },
  {
    icon: <FaGlobe />,
    value: "25+",
    title: "Countries",
  },
  {
    icon: <FaGraduationCap />,
    value: "60+",
    title: "Years Legacy",
  },
];

const Statistics = () => {
  return (
    <section className="py-20 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-4 gap-8">

          {stats.map((item) => (
            <div
              key={item.title}
              className="
              bg-gradient-to-br
              from-white
              to-blue-50
              rounded-3xl
              shadow-lg
              p-8
              text-center
              "
            >
              <div className="text-5xl text-blue-600 flex justify-center">
                {item.icon}
              </div>

              <h3 className="text-4xl font-bold mt-4">
                {item.value}
              </h3>

              <p className="text-gray-500 mt-2">
                {item.title}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Statistics;