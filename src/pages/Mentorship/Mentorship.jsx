import { useEffect, useState } from "react";

import MentorCard from "../../components/mentorship/MentorCard";

import { getMentors } from "../../api/mentorApi";

import { errorToast } from "../../utils/toast";

const Mentorship = () => {

  const [mentors, setMentors] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    const loadMentors =
      async () => {

        try {

          const response =
            await getMentors();

          setMentors(
            response.data
          );

        } catch (error) {

          console.error(error);

          errorToast(
            "Failed to load mentors"
          );

        } finally {

          setLoading(false);
        }
      };

    loadMentors();

  }, []);

  return (
    <div className="max-w-7xl mx-auto py-10 px-6">

      <div className="text-center mb-12">

        <h1 className="text-5xl font-bold">
          Find A Mentor
        </h1>

        <p className="text-gray-500 mt-4">
          Connect with experienced BCE alumni.
        </p>

      </div>

      {loading ? (

        <div className="text-center py-20">
          Loading mentors...
        </div>

      ) : mentors.length === 0 ? (

        <div className="text-center py-20 text-gray-500">
          No mentors available
        </div>

      ) : (

        <div className="grid lg:grid-cols-3 gap-8">

          {mentors?.map((mentor) => (

            <MentorCard
              key={mentor.id}
              mentor={mentor}
            />

          ))}

        </div>

      )}

    </div>
  );
};

export default Mentorship;