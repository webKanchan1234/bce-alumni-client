const DonationBanner = () => {
  return (
    <section className="py-20">

      <div className="max-w-6xl mx-auto px-6">

        <div className="bg-gradient-to-r from-blue-700 to-indigo-700 rounded-3xl p-12 text-white text-center">

          <h2 className="text-4xl font-bold">
            Support Future Engineers
          </h2>

          <p className="mt-4">
            Help BCE students through scholarships and innovation.
          </p>

          <button className="mt-8 bg-white text-blue-700 px-8 py-3 rounded-xl">
            Donate Now
          </button>

        </div>

      </div>

    </section>
  );
};

export default DonationBanner;