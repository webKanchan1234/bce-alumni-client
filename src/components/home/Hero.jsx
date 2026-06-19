import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">

      {/* Background Image */}

      <div className="absolute inset-0">
        <img
          src="https://static.boostmytalent.com/img/univ/bhagalpur-engineering-college-bihar-campus-admission.webp"
          alt="BCE Campus"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Overlay */}

      <div
        className="
        absolute
        inset-0
        bg-gradient-to-r
        from-black/80
        via-blue-950/70
        to-black/60
        "
      />

      {/* Content */}

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-24">

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >

          <span
            className="
            inline-flex
            items-center
            px-5
            py-2
            rounded-full
            bg-white/10
            backdrop-blur-md
            border
            border-white/20
            text-sm
            font-medium
            text-white
            "
          >
            BCE Alumni Welfare Association
          </span>

          <h1
            className="
            mt-6
            text-4xl
            sm:text-5xl
            md:text-6xl
            lg:text-7xl
            font-extrabold
            text-white
            leading-[1.1]
            "
          >
            Connecting BCE Alumni
            <br />
            Across The World
          </h1>

          <p
            className="
            mt-6
            text-lg
            md:text-xl
            text-white/90
            leading-8
            max-w-2xl
            "
          >
            Connect with BCE alumni worldwide, discover
            career opportunities, find mentors, attend
            exclusive events and contribute to the future
            of Bhagalpur College of Engineering.
          </p>

          {/* CTA Buttons */}

          <div className="flex flex-col sm:flex-row gap-4 mt-10">

            <Link
              to="/register"
              className="
              bg-yellow-500
              hover:bg-yellow-400
              text-black
              px-8
              py-4
              rounded-xl
              font-bold
              text-center
              transition
              shadow-lg
              "
            >
              Join Community
            </Link>

            <Link
              to="/alumni"
              className="
              border-2
              border-white
              text-white
              px-8
              py-4
              rounded-xl
              font-bold
              text-center
              hover:bg-white
              hover:text-blue-900
              transition
              "
            >
              Explore Alumni
            </Link>

          </div>

          {/* Statistics */}

          <div
            className="
            grid
            grid-cols-3
            gap-8
            mt-14
            max-w-2xl
            "
          >

            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-yellow-400">
                10K+
              </h3>
              <p className="text-white/80 mt-1">
                Alumni Network
              </p>
            </div>

            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-yellow-400">
                60+
              </h3>
              <p className="text-white/80 mt-1">
                Years Legacy
              </p>
            </div>

            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-yellow-400">
                50+
              </h3>
              <p className="text-white/80 mt-1">
                Countries
              </p>
            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default Hero;