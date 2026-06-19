import { useEffect, useState } from "react";
import { getLeadership } from "../../api/leadershipApi";
import { errorToast } from "../../utils/toast";

const Leadership = () => {
  const [leaders, setLeaders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadLeadership();
  }, []);

  const loadLeadership = async () => {
    try {
      const response = await getLeadership();
      setLeaders(response.data);
    } catch (error) {
      console.error(error);
      errorToast("Failed to load leadership team");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 bg-slate-50">

      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}

        <div className="text-center mb-16">

          <span
            className="
            inline-block
            px-5 py-2
            rounded-full
            bg-yellow-100
            text-yellow-700
            font-semibold
            "
          >
            BCE Leadership
          </span>

          <h2
            className="
            text-4xl
            md:text-5xl
            font-bold
            mt-5
            text-slate-900
            "
          >
            Alumni Leadership Team
          </h2>

          <p
            className="
            text-gray-500
            mt-4
            max-w-2xl
            mx-auto
            "
          >
            Guiding the future of BCE Alumni Welfare Association
            through leadership, mentorship and service.
          </p>

        </div>

        {loading ? (

          <div className="text-center py-20">
            Loading leadership team...
          </div>

        ) : (

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

            {leaders.map((leader) => (

              <div
                key={leader.id}
                className="
                bg-white
                rounded-3xl
                p-6
                border
                border-slate-200
                shadow-sm
                hover:shadow-xl
                hover:-translate-y-2
                transition-all
                duration-300
                text-center
                "
              >

                {/* Image */}

                <div
                  className="
                  w-32
                  h-32
                  mx-auto
                  rounded-full
                  p-1.5
                  bg-gradient-to-r
                  from-yellow-600
                  to-yellow-400
                  "
                >

                  <img
                    src={
                      leader.image ||
                      "https://i.pravatar.cc/400"
                    }
                    alt={leader.name}
                    className="
                    w-full
                    h-full
                    rounded-full
                    object-cover
                    border-2
                    border-white
                    "
                  />

                </div>

                {/* Name */}

                <h3
                  className="
                  text-2xl
                  font-bold
                  text-slate-900
                  mt-5
                  leading-tight
                  "
                >
                  {leader.name}
                </h3>

                {/* Role */}

                <p
                  className="
                  text-yellow-500
                  uppercase
                  font-bold
                  tracking-wide
                  text-base
                  mt-2
                  "
                >
                  {leader.role}
                </p>

                {/* Batch */}

                {leader.company && (

                  <div
                    className="
                    mt-4
                    inline-block
                    bg-slate-100
                    px-4
                    py-2
                    rounded-xl
                    text-sm
                    font-semibold
                    text-slate-700
                    "
                  >
                    {leader.company}
                  </div>

                )}

                {/* Bio */}

                {leader.bio && (

                  <p
                    className="
                    text-gray-500
                    mt-5
                    text-sm
                    leading-7
                    line-clamp-4
                    "
                  >
                    {leader.bio.replace(
                      /^President's Message\s*/i,
                      ""
                    )}
                  </p>

                )}

                {/* LinkedIn */}

                {leader.linkedinUrl && (

                  <a
                    href={leader.linkedinUrl}
                    target="_blank"
                    // rel="noopener noreferrer"
                    className="
                    inline-block
                    mt-5
                    text-blue-600
                    font-semibold
                    hover:underline
                    "
                  >
                    View Profile →
                  </a>

                )}

              </div>

            ))}

          </div>

        )}

      </div>

    </section>
  );
};

export default Leadership;