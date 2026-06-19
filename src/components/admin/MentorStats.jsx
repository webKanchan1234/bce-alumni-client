import { useEffect, useState } from "react";

import { getMentors } from "../../api/mentorApi";

import { errorToast } from "../../utils/toast";

const MentorStats = () => {

  const [stats, setStats] =
    useState({
      totalMentors: 0,
      activeMentors: 0,
      pendingApproval: 0,
    });

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    const loadStats = async () => {

      try {

        const response =
          await getMentors();

        const mentors =
          response.data || [];

        const activeMentors =
          mentors.filter(
            (mentor) =>
              mentor.active === true
          ).length;

        const pendingApproval =
          mentors.filter(
            (mentor) =>
              mentor.approved === false
          ).length;

        setStats({
          totalMentors:
            mentors.length,
          activeMentors,
          pendingApproval,
        });

      } catch (error) {

        console.error(error);

        errorToast(
          "Failed to load mentor statistics"
        );

      } finally {

        setLoading(false);
      }
    };

    loadStats();

  }, []);

  const cards = [
    {
      title: "Total Mentors",
      value: stats.totalMentors,
    },
    {
      title: "Active Mentors",
      value: stats.activeMentors,
    },
    {
      title: "Pending Approval",
      value: stats.pendingApproval,
    },
  ];

  if (loading) {

    return (
      <div className="grid md:grid-cols-3 gap-6 mb-8">

        {[1, 2, 3].map((item) => (

          <div
            key={item}
            className="
            bg-white
            rounded-2xl
            shadow
            p-6
            animate-pulse
            h-32
            "
          />

        ))}

      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-3 gap-6 mb-8">

      {cards.map((item) => (

        <div
          key={item.title}
          className="
          bg-white
          rounded-2xl
          shadow
          p-6
          hover:shadow-lg
          transition
          "
        >

          <h3 className="text-gray-500">
            {item.title}
          </h3>

          <p
            className="
            text-4xl
            font-bold
            mt-2
            text-blue-700
            "
          >
            {item.value}
          </p>

        </div>

      ))}

    </div>
  );
};

export default MentorStats;