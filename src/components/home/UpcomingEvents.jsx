const events = [
  "Annual Alumni Meet",
  "Startup Summit",
  "Mentorship Session",
];

const UpcomingEvents = () => {
  return (
    <section className="py-20">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-center text-4xl font-bold mb-12">
          Upcoming Events
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {events.map((event) => (
            <div
              key={event}
              className="p-8 rounded-3xl shadow-lg bg-white"
            >
              <h3 className="font-bold text-xl">
                {event}
              </h3>

              <button className="mt-4 text-blue-600">
                Learn More →
              </button>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default UpcomingEvents;