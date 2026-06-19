import { useEffect, useState } from "react";

import { getAnalytics } from "../../api/analyticsApi";

import {
  errorToast,
} from "../../utils/toast";

const AnalyticsCards = () => {

  const [analytics, setAnalytics] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    const fetchAnalytics =
      async () => {

        try {

          const response =
            await getAnalytics();

          setAnalytics(
            response.data
          );

        } catch (error) {

          console.error(error);

          errorToast(
            "Failed to load analytics"
          );

        } finally {

          setLoading(false);

        }
      };

    fetchAnalytics();

  }, []);

  const cards = [
    {
      title: "Total Alumni",
      value:
        analytics?.totalUsers-1 || 0,
    },
    {
      title: "Events",
      value:
        analytics?.totalEvents || 0,
    },
    {
      title: "Jobs",
      value:
        analytics?.totalJobs || 0,
    },
    {
      title: "Mentors",
      value:
        analytics?.totalMentors || 0,
    },
  ];

  if (loading) {
    return (
      <div className="grid md:grid-cols-4 gap-6">
        {[1, 2, 3, 4].map((item) => (
          <div
            key={item}
            className="
            bg-white
            rounded-3xl
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
    <div className="grid md:grid-cols-4 gap-6">

      {cards.map((card) => (

        <div
          key={card.title}
          className="
          bg-white
          rounded-3xl
          shadow
          p-6
          hover:shadow-lg
          transition
          "
        >

          <p
            className="
            text-gray-500
            text-sm
            "
          >
            {card.title}
          </p>

          <h3
            className="
            text-4xl
            font-bold
            mt-2
            text-blue-700
            "
          >
            {card.value}
          </h3>

        </div>

      ))}

    </div>
  );
};

export default AnalyticsCards;