import { Link } from "react-router-dom";

const EventCard = ({ event }) => {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition">

      <img
        src={event.imageUrl}
        alt={event.title}
        className="w-full h-60 object-cover"
      />

      <div className="p-6">

        <h3 className="text-2xl font-bold">
          {event.title}
        </h3>

        <p className="text-blue-600 mt-2">
          {event.date}
        </p>

        <p className="text-gray-500">
          {event.location}
        </p>

        <p className="mt-4 text-gray-600">
          {event.description}
        </p>

        <Link
          to={`/events/${event.id}`}
          className="
          inline-block
          mt-6
          bg-blue-600
          text-white
          px-6
          py-3
          rounded-xl
          "
        >
          View Details
        </Link>

      </div>

    </div>
  );
};

export default EventCard;