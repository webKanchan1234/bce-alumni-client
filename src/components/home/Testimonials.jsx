const Testimonials = () => {
  return (
    <section className="py-20">

      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-center text-4xl font-bold mb-12">
          Alumni Voices
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-white p-8 rounded-3xl shadow-lg">
            "BCE gave me lifelong friendships and opportunities."
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-lg">
            "The alumni network continues to support my career."
          </div>

        </div>

      </div>

    </section>
  );
};

export default Testimonials;