const companies = [
  "Google",
  "Microsoft",
  "Amazon",
  "Meta",
  "Adobe",
  "Infosys",
  "TCS",
  "Wipro",
];

const CompaniesSlider = () => {
  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-center text-3xl font-bold mb-10">
          Our Alumni Work At
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {companies.map((company) => (
            <div
              key={company}
              className="bg-white rounded-2xl shadow-md p-6 text-center font-semibold hover:shadow-xl transition"
            >
              {company}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default CompaniesSlider;