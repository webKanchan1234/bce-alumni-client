import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About BCE Alumni Association</title>
      </Helmet>

      <div className="bg-slate-50">

        {/* Hero Section */}

        <section
          className="
          relative
          h-[500px]
          flex
          items-center
          justify-center
          text-center
          text-white
          "
          style={{
            backgroundImage:
              "url('https://static.boostmytalent.com/img/univ/bhagalpur-engineering-college-bihar-campus-admission.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-blue-950/70" />

          <div className="relative z-10 max-w-5xl px-6">
            <h1 className="text-6xl font-extrabold">
              Our Legacy
            </h1>

            <p className="mt-6 text-xl">
              Bhagalpur College of Engineering Alumni
              Association — Connecting Generations,
              Building Futures.
            </p>
          </div>
        </section>

        {/* Legacy Section */}

        <section className="max-w-7xl mx-auto px-6 py-24">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div>

              <h2 className="text-5xl font-bold text-slate-900">
                Bridging Generations
              </h2>

              <p className="mt-8 text-xl text-gray-700 leading-9">
                The BCE Alumni Welfare Association
                is more than just a network.
                It is a prestigious family of engineers,
                entrepreneurs, researchers, educators,
                and leaders spread across the globe.
              </p>

              <p className="mt-6 text-lg text-gray-600 leading-8">
                Founded to nurture lifelong
                relationships, our association works
                tirelessly to celebrate alumni
                achievements while supporting
                current students and strengthening
                the institution that shaped us.
              </p>

            </div>

            <img
              src="https://static.boostmytalent.com/img/univ/bhagalpur-engineering-college-bihar-campus-admission.webp"
              alt="BCE Campus"
              className="
              rounded-3xl
              shadow-2xl
              w-full
              "
            />

          </div>

        </section>

        {/* Institutional Focus */}

        <section className="bg-white py-24">

          <div className="max-w-7xl mx-auto px-6">

            <div className="text-center">

              <h2 className="text-5xl font-bold">
                Our Institutional Focus
              </h2>

              <p className="mt-6 text-xl text-gray-500">
                We are committed to three core pillars
                that define our mission and value to
                the BCE community.
              </p>

            </div>

            <div className="grid lg:grid-cols-3 gap-8 mt-20">

              <div className="bg-slate-50 p-10 rounded-3xl shadow-sm">

                <h3 className="text-3xl font-bold mb-6">
                  Community First
                </h3>

                <p className="text-gray-600 text-lg leading-8">
                  Maintaining a robust global alumni
                  network so every BCEian remains
                  connected to mentorship,
                  collaboration and opportunity.
                </p>

              </div>

              <div className="bg-slate-50 p-10 rounded-3xl shadow-sm">

                <h3 className="text-3xl font-bold mb-6">
                  Academic Support
                </h3>

                <p className="text-gray-600 text-lg leading-8">
                  Bridging the gap between students
                  and industry leaders through
                  mentorship, guidance,
                  scholarships and career support.
                </p>

              </div>

              <div className="bg-slate-50 p-10 rounded-3xl shadow-sm">

                <h3 className="text-3xl font-bold mb-6">
                  Institutional Growth
                </h3>

                <p className="text-gray-600 text-lg leading-8">
                  Supporting BCE's future through
                  alumni engagement, fundraising,
                  innovation and strategic
                  development initiatives.
                </p>

              </div>

            </div>

          </div>

        </section>

        {/* Stats */}

        <section className="bg-blue-950 text-white py-24">

          <div className="max-w-7xl mx-auto px-6">

            <div className="grid md:grid-cols-4 gap-10 text-center">

              <div>
                <h2 className="text-5xl font-bold">
                  10K+
                </h2>
                <p className="mt-3 text-gray-300">
                  Alumni Network
                </p>
              </div>

              <div>
                <h2 className="text-5xl font-bold">
                  60+
                </h2>
                <p className="mt-3 text-gray-300">
                  Years of Legacy
                </p>
              </div>

              <div>
                <h2 className="text-5xl font-bold">
                  500+
                </h2>
                <p className="mt-3 text-gray-300">
                  Mentorship Sessions
                </p>
              </div>

              <div>
                <h2 className="text-5xl font-bold">
                  100+
                </h2>
                <p className="mt-3 text-gray-300">
                  Annual Events
                </p>
              </div>

            </div>

          </div>

        </section>

        {/* CTA */}

        <section className="py-24 bg-white text-center">

          <div className="max-w-4xl mx-auto px-6">

            <h2 className="text-5xl font-bold">
              Join The BCE Alumni Network
            </h2>

            <p className="mt-6 text-xl text-gray-600">
              Stay connected with fellow alumni,
              contribute to student success,
              and help shape the future of BCE.
            </p>

            <a
              href="/register"
              className="
              inline-block
              mt-10
              bg-blue-600
              text-white
              px-10
              py-4
              rounded-2xl
              text-lg
              font-semibold
              hover:bg-blue-700
              transition
              "
            >
              Become A Member
            </a>

          </div>

        </section>

      </div>
    </>
  );
};

export default About;