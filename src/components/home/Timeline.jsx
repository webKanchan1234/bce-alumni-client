const timeline = [
  {
    year: "1960",
    title: "BCE Established",
  },
  {
    year: "1990",
    title: "First Global Alumni Meet",
  },
  {
    year: "2010",
    title: "Digital Alumni Network",
  },
  {
    year: "2026",
    title: "Global BCE Community",
  },
];

const Timeline = () => {
  return (
    <section className="py-20 bg-slate-50">

      <div className="max-w-5xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-16">
          BCE Through The Years
        </h2>

        <div className="space-y-8">

          {timeline.map((item) => (
            <div
              key={item.year}
              className="flex gap-6"
            >
              <div className="font-bold text-blue-600">
                {item.year}
              </div>

              <div>{item.title}</div>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Timeline;