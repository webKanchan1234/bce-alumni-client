import { useEffect, useState } from "react";

import { getCurrentUser } from "../../api/authApi";
import { getEvents } from "../../api/eventApi";
import { getJobs } from "../../api/jobApi";
import { getMentors } from "../../api/mentorApi";

import { errorToast } from "../../utils/toast";

const Dashboard = () => {

  const [user, setUser] =
    useState(null);

  const [stats, setStats] =
    useState({
      connections: 0,
      events: 0,
      jobs: 0,
      mentors: 0,
    });

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    const loadDashboard =
      async () => {

        try {

          const [
            userRes,
            eventsRes,
            jobsRes,
            mentorsRes,
          ] = await Promise.all([
            getCurrentUser(),
            getEvents(),
            getJobs(),
            getMentors(),
          ]);

          setUser(
            userRes.data
          );

          setStats({
            connections:
              userRes.data
                ?.connectionsCount || 0,

            events:
              eventsRes.data
                ?.length || 0,

            jobs:
              jobsRes.data
                ?.length || 0,

            mentors:
              mentorsRes.data
                ?.length || 0,
          });

        } catch (error) {

          console.error(error);

          errorToast(
            "Failed to load dashboard"
          );

        } finally {

          setLoading(false);
        }
      };

    loadDashboard();

  }, []);

  if (loading) {

    return (
      <div>

        <h1 className="text-3xl font-bold mb-8">
          Loading Dashboard...
        </h1>

        <div className="grid md:grid-cols-4 gap-6">

          {[1, 2, 3, 4].map((item) => (

            <div
              key={item}
              className="
              bg-white
              p-6
              rounded-3xl
              shadow
              animate-pulse
              h-32
              "
            />

          ))}

        </div>

      </div>
    );
  }

  const cards = [
    {
      title: "Connections",
      value: stats.connections,
    },
    {
      title: "Events",
      value: stats.events,
    },
    {
      title: "Jobs",
      value: stats.jobs,
    },
    {
      title: "Mentorship",
      value: stats.mentors,
    },
  ];

  return (
    <>

      <h1
        className="
        text-3xl
        font-bold
        mb-8
        "
      >
        Welcome Back 👋{" "}
        {user?.firstName}
      </h1>

      <div
        className="
        grid
        md:grid-cols-4
        gap-6
        "
      >

        {cards.map((card) => (

          <div
            key={card.title}
            className="
            bg-white
            p-6
            rounded-3xl
            shadow
            hover:shadow-lg
            transition
            "
          >

            <h3
              className="
              text-gray-500
              "
            >
              {card.title}
            </h3>

            <h1
              className="
              text-4xl
              font-bold
              mt-3
              text-blue-700
              "
            >
              {card.value}
            </h1>

          </div>

        ))}

      </div>

    </>
  );
};

export default Dashboard;