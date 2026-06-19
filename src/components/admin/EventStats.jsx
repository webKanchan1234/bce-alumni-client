import { useEffect, useState } from "react";

import { getEvents } from "../../api/eventApi";

import { errorToast } from "../../utils/toast";

const EventStats = () => {

  const [stats, setStats] = useState({
    total: 0,
    upcoming: 0,
    completed: 0,
  });

  useEffect(() => {

    const loadStats = async () => {

      try {

        const response =
          await getEvents();

        const events =
          response.data || [];

        const today =
          new Date();

        const upcoming =
          events.filter(
            (event) =>
              new Date(
                event.eventDate ||
                event.date
              ) > today
          ).length;

        const completed =
          events.filter(
            (event) =>
              new Date(
                event.eventDate ||
                event.date
              ) <= today
          ).length;

        setStats({
          total: events.length,
          upcoming,
          completed,
        });

      } catch (error) {

        console.error(error);

        errorToast(
          "Failed to load event statistics"
        );
      }
    };

    loadStats();

  }, []);

  const cards = [
    {
      title: "Total Events",
      value: stats.total,
    },
    {
      title: "Upcoming",
      value: stats.upcoming,
    },
    {
      title: "Completed",
      value: stats.completed,
    },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-6 mb-8">

      {cards.map((item) => (

        <div
          key={item.title}
          className="
          bg-white
          p-6
          rounded-2xl
          shadow
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
            mt-3
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

export default EventStats;