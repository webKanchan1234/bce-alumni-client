import { useEffect, useState } from "react";

import { getAnalytics } from "../../api/analyticsApi";

import {
  errorToast,
} from "../../utils/toast";

const Dashboard = () => {

  const [analytics, setAnalytics] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    const loadAnalytics =
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
            "Failed to load dashboard"
          );

        } finally {

          setLoading(false);
        }
      };

    loadAnalytics();

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
      title: "News",
      value:
        analytics?.totalNews || 0,
    },
    {
      title: "Jobs",
      value:
        analytics?.totalJobs || 0,
    },
  ];

  if (loading) {

    return (
      <div>

        <h1 className="text-4xl font-bold mb-8">
          Admin Dashboard
        </h1>

        <div className="grid md:grid-cols-4 gap-6">

          {[1, 2, 3, 4].map(
            (item) => (

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

            )
          )}

        </div>

      </div>
    );
  }

  return (
    <div>

      <h1 className="text-4xl font-bold mb-8">
        Admin Dashboard
      </h1>

      <div className="grid md:grid-cols-4 gap-6">

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

            <p
              className="
              text-4xl
              font-bold
              mt-3
              text-blue-700
              "
            >
              {card.value}
            </p>

          </div>

        ))}

      </div>

    </div>
  );
};

export default Dashboard;