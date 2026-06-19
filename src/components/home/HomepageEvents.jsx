import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import EventCountdown from "../events/EventCountdown";

import { getEvents } from "../../api/eventApi";

const HomepageEvents = () => {

  const [event, setEvent] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    loadLatestEvent();
  }, []);

  const loadLatestEvent = async () => {

  try {

    const response =
      await getEvents();

    const events =
      response.data || [];

    if (events.length === 0) {
      return;
    }

    const now =
      new Date();

    const upcomingEvents =
      events.filter((event) => {

        const eventDateTime =
          new Date(
            `${event.eventDate}T${event.eventTime || "00:00:00"}`
          );

        return eventDateTime >= now;
      });

    if (upcomingEvents.length === 0) {
      return;
    }

    const latestEvent =
      upcomingEvents.sort(
        (a, b) =>
          new Date(
            `${a.eventDate}T${a.eventTime || "00:00:00"}`
          ) -
          new Date(
            `${b.eventDate}T${b.eventTime || "00:00:00"}`
          )
      )[0];

    setEvent(latestEvent);

  } catch (error) {

    console.error(
      "Failed to load event",
      error
    );

  } finally {

    setLoading(false);
  }
};

    console.log("Latest Event:", event);

  if (loading) {
    return null;
  }

  if (!event) {
    return null;
  }

  return (

    <section className="py-12 md:py-20 bg-slate-50 overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <div
          className="
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-8
          lg:gap-16
          items-center
          "
        >

          {/* Event Image */}

          <div>

            <img
              src={event.imageUrl}
              alt={event.title}
              className="
              w-full
              h-64
              sm:h-80
              md:h-96
              lg:h-[450px]
              rounded-3xl
              object-cover
              shadow-xl
              "
            />

          </div>

          {/* Event Content */}

          <div>

            <span
              className="
              inline-block
              bg-blue-100
              text-blue-700
              px-4
              py-2
              rounded-full
              font-semibold
              text-sm
              "
            >
              Upcoming Event
            </span>

            <h2
              className="
              mt-5
              text-3xl
              sm:text-4xl
              lg:text-5xl
              font-bold
              leading-tight
              "
            >
              {event.title}
            </h2>

            <p
              className="
              mt-5
              text-gray-600
              text-base
              sm:text-lg
              leading-relaxed
              "
            >
              {event.description}
            </p>

            <div className="mt-6 space-y-3 text-gray-700">

              <p>
                📍 {event.location}
              </p>

              <p>
  📅 {event.eventDate}
</p>

<p>
  🕒 {event.eventTime}
</p>

            </div>

            <div className="mt-8">

              <EventCountdown
  targetDate={
    `${event.eventDate}T${event.eventTime || "00:00:00"}`
  }
/>

            </div>

            <div
              className="
              flex
              flex-col
              sm:flex-row
              gap-4
              mt-8
              "
            >

              <Link
                to={`/events/${event.id}`}
                className="
                w-full
                sm:w-auto
                text-center
                bg-blue-600
                hover:bg-blue-700
                text-white
                px-8
                py-4
                rounded-xl
                font-semibold
                transition
                "
              >
                Register Now
              </Link>

              <Link
                to="/events"
                className="
                w-full
                sm:w-auto
                text-center
                border-2
                border-blue-600
                text-blue-600
                hover:bg-blue-600
                hover:text-white
                px-8
                py-4
                rounded-xl
                font-semibold
                transition
                "
              >
                View All Events
              </Link>

            </div>

          </div>

        </div>

      </div>

    </section>

  );
};

export default HomepageEvents;