const alumni = [
  {
    name: "Rahul Kumar",
    company: "Google",
    role: "Senior Engineer",
  },
  {
    name: "Ankit Singh",
    company: "Microsoft",
    role: "Engineering Manager",
  },
  {
    name: "Pooja Sharma",
    company: "Amazon",
    role: "Product Manager",
  },
];

const AlumniHighlights = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          Distinguished Alumni
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {alumni.map((item) => (
            <div
              key={item.name}
              className="rounded-3xl shadow-xl overflow-hidden"
            >
              <img
                src={`https://picsum.photos/400/400?random=${item.name}`}
                alt={item.name}
                className="h-72 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="font-bold text-xl">
                  {item.name}
                </h3>

                <p className="text-blue-600">
                  {item.company}
                </p>

                <p>{item.role}</p>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default AlumniHighlights;