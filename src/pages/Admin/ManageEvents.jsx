import { useEffect, useState } from "react";

import EventStats from "../../components/admin/EventStats";
import EventTable from "../../components/admin/EventTable";
import EventFormModal from "../../components/admin/EventFormModal";

import { getEvents,updateEvent,createEvent } from "../../api/eventApi";

import {
  errorToast,
  successToast,
} from "../../utils/toast";

const ManageEvents = () => {

  const [open, setOpen] =
    useState(false);

  const [events, setEvents] =
    useState([]);
    const [selectedEvent, setSelectedEvent] =
  useState(null);

  const [loading, setLoading] =
    useState(true);

  const loadEvents = async () => {

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

  useEffect(() => {
    loadEvents();
  }, []);

  console.log("Loaded Events:", events);

  return (
    <div>

      <div
        className="
        flex
        justify-between
        items-center
        mb-8
        "
      >

        <h1
          className="
          text-4xl
          font-bold
          "
        >
          Manage Events
        </h1>

        <button
  onClick={() => {

    setSelectedEvent(null);
    setOpen(true);

  }}
  className="
  bg-blue-600
  text-white
  px-6
  py-3
  rounded-xl
  "
>
  + Create Event
</button>

      </div>

      <EventStats />

      {loading ? (

        <div
          className="
          bg-white
          rounded-2xl
          shadow
          p-10
          text-center
          "
        >
          Loading events...
        </div>

      ) : (

        <EventTable
  events={events}
  refreshEvents={loadEvents}
  onEdit={(event) => {

    setSelectedEvent(event);

    setOpen(true);

  }}
/>

      )}

      <EventFormModal
  open={open}
  event={selectedEvent}
  onClose={() => {

    setOpen(false);
    setSelectedEvent(null);

  }}
  onSuccess={() => {

    loadEvents();

    setOpen(false);

    setSelectedEvent(null);

  }}
/>

    </div>
  );
};

export default ManageEvents;