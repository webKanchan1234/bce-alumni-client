import {
  deleteEvent,
} from "../../api/eventApi";

import {
  successToast,
  errorToast,
} from "../../utils/toast";

const EventTable = ({
  events,
  refreshEvents,
  onEdit,
}) => {

  const handleDelete =
    async (id) => {

      const confirmed =
        window.confirm(
          "Delete this event?"
        );

      if (!confirmed) return;

      try {

        await deleteEvent(id);

        successToast(
          "Event deleted successfully"
        );

        refreshEvents();

      } catch (error) {

        console.error(error);

        errorToast(
          "Failed to delete event"
        );
      }
    };

  return (
    <div
      className="
      bg-white
      rounded-2xl
      shadow
      overflow-hidden
      "
    >

      <table className="w-full">

        <thead className="bg-slate-100">

          <tr>

            <th className="p-4 text-left">
              Event
            </th>

            <th className="p-4 text-left">
              Date
            </th>

            <th className="p-4 text-left">
              Location
            </th>

            <th className="p-4 text-left">
              Status
            </th>

            <th className="p-4 text-left">
              Actions
            </th>

          </tr>

        </thead>

        <tbody>

          {events.map((event) => (

            <tr
              key={event.id}
              className="border-t"
            >

              <td className="p-4 font-medium">
                {event.title}
              </td>

              <td className="p-4">
                {event.eventDate}
              </td>

              <td className="p-4">
                {event.location}
              </td>

              <td className="p-4">

                <span
                  className="
                  bg-green-100
                  text-green-700
                  px-3
                  py-1
                  rounded-full
                  text-sm
                  "
                >
                  Published
                </span>

              </td>

              <td className="p-4">

                <div className="flex gap-4">

                  <button
                    onClick={() =>
                      onEdit(event)
                    }
                    className="
                    text-blue-600
                    hover:text-blue-800
                    "
                  >
                    Edit
                  </button>

                  <button
                    onClick={() =>
                      handleDelete(
                        event.id
                      )
                    }
                    className="
                    text-red-600
                    hover:text-red-800
                    "
                  >
                    Delete
                  </button>

                </div>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
};

export default EventTable;