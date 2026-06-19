const SuccessStories = () => {
  return (
    <section className="py-20 bg-slate-50">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-center text-4xl font-bold mb-12">
          Success Stories
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-white p-8 rounded-3xl shadow-lg">
            <h3 className="text-2xl font-bold">
              From BCE To Google
            </h3>

            <p className="mt-4 text-gray-600">
              Alumni have built careers at top
              global companies and startups.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-lg">
            <h3 className="text-2xl font-bold">
              Startup Founders
            </h3>

            <p className="mt-4 text-gray-600">
              Many BCE graduates are founders,
              innovators and leaders.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
};

export default SuccessStories;