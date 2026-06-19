const Newsletter = () => {
  return (
    <section className="py-20 bg-slate-50">

      <div className="max-w-4xl mx-auto px-6 text-center">

        <h2 className="text-4xl font-bold">
          Stay Connected
        </h2>

        <p className="mt-4 text-gray-600">
          Get updates from BCE Alumni Association.
        </p>

        <div className="flex flex-col md:flex-row gap-4 mt-8">

          <input
            type="email"
            placeholder="Enter Email"
            className="flex-1 border rounded-xl p-4"
          />

          <button className="bg-blue-600 text-white px-8 rounded-xl">
            Subscribe
          </button>

        </div>

      </div>

    </section>
  );
};

export default Newsletter;