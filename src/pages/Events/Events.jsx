import { useEffect, useState } from "react";

import EventCard from "../../components/events/EventCard";

import { getEvents } from "../../api/eventApi";

import {
  errorToast,
} from "../../utils/toast";

const Events = () => {

  const [events, setEvents] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    const fetchEvents = async () => {

      try {

        const response =
          await getEvents();

        setEvents(
          response.data
        );

      } catch (error) {

        console.error(error);

        errorToast(
          "Failed to load events"
        );

      } finally {

        setLoading(false);

      }
    };

    fetchEvents();

  }, []);

  console.log("Loaded Events:", events);

  return (
    <div className="bg-slate-50 min-h-screen">

      <section
        className="
        bg-gradient-to-r
        from-blue-700
        to-indigo-800
        text-white
        py-24
        "
      >
        <div className="max-w-7xl mx-auto px-6">

          <h1 className="text-5xl font-bold">
            BCE Alumni Events
          </h1>

          <p className="mt-4 text-xl">
            Connect, learn and grow together.
          </p>

        </div>
      </section>

      <section
        className="
        max-w-7xl
        mx-auto
        px-6
        py-20
        "
      >

        {loading ? (

          <div
            className="
            grid
            lg:grid-cols-2
            gap-10
            "
          >
            {[1, 2, 3, 4].map(
              (item) => (
                <div
                  key={item}
                  className="
                  bg-white
                  h-72
                  rounded-3xl
                  animate-pulse
                  "
                />
              )
            )}
          </div>

        ) : events.length > 0 ? (

          <div
            className="
            grid
            lg:grid-cols-2
            gap-10
            "
          >

            {events.map((event) => (

              <EventCard
                key={event.id}
                event={event}
              />

            ))}

          </div>

        ) : (

          <div
            className="
            text-center
            py-20
            "
          >
            <h2
              className="
              text-3xl
              font-bold
              "
            >
              No Events Found
            </h2>

            <p
              className="
              text-gray-500
              mt-3
              "
            >
              Upcoming events will appear here.
            </p>
          </div>

        )}

      </section>

    </div>
  );
};

export default Events;