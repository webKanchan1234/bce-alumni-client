import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import {
  getEventById,
  registerEvent,
} from "../../api/eventApi";

import {
  successToast,
  errorToast,
} from "../../utils/toast";

const EventDetails = () => {

  const { id } = useParams();

  const [event, setEvent] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  const [registering, setRegistering] =
    useState(false);

  useEffect(() => {

    const loadEvent =
      async () => {

        try {

          const response =
            await getEventById(id);

          setEvent(
            response.data
          );

        } catch (error) {

          console.error(error);

          errorToast(
            "Failed to load event"
          );

        } finally {

          setLoading(false);
        }
      };

    loadEvent();

  }, [id]);

  const handleRegister =
    async () => {

      try {

        setRegistering(true);

        await registerEvent(id);

        successToast(
          "Successfully registered for event 🎉"
        );

      } catch (error) {

        console.error(error);

        errorToast(
          error?.response?.data?.message ||
          "Registration failed"
        );

      } finally {

        setRegistering(false);
      }
    };

  if (loading) {

    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading Event...
      </div>
    );
  }

  if (!event) {

    return (
      <div className="min-h-screen flex items-center justify-center">
        Event not found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">

      <img
        src={
          event.imageUrl ||
          "https://via.placeholder.com/1600x600"
        }
        alt={event.title}
        className="
        w-full
        h-[500px]
        object-cover
        "
      />

      <div className="max-w-5xl mx-auto px-6 py-12">

        <h1 className="text-5xl font-bold">
          {event.title}
        </h1>

        <p
          className="
          mt-4
          text-xl
          text-blue-600
          "
        >
          {event.eventDate}
        </p>

        <p className="text-lg">
          {event.location}
        </p>

        <div
          className="
          mt-8
          bg-white
          rounded-3xl
          p-8
          shadow
          "
        >

          <h2
            className="
            text-2xl
            font-bold
            mb-4
            "
          >
            About Event
          </h2>

          <p>
            {event.description}
          </p>

        </div>

        <div
          className="
          mt-8
          flex
          gap-4
          "
        >

          <button
            onClick={
              handleRegister
            }
            disabled={
              registering
            }
            className="
            bg-blue-600
            text-white
            px-8
            py-4
            rounded-xl
            hover:bg-blue-700
            disabled:bg-gray-400
            "
          >
            {registering
              ? "Registering..."
              : "Register Now"}
          </button>

        </div>

      </div>

    </div>
  );
};

export default EventDetails;