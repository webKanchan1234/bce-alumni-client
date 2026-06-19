const FeaturedNews = () => {
  return (
    <section className="py-20">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-10 items-center">

          <img
            src="https://images.unsplash.com/photo-1511578314322-379afb476865"
            alt=""
            className="rounded-3xl h-[450px] w-full object-cover"
          />

          <div>

            <span className="bg-red-500 text-white px-4 py-1 rounded-full">
              Featured
            </span>

            <h2 className="text-5xl font-bold mt-6">
              BCE Alumni Meet 2026 Announced
            </h2>

            <p className="text-gray-600 mt-6">
              The annual BCE Alumni Meet will bring
              together graduates from around the globe.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
};

export default FeaturedNews;