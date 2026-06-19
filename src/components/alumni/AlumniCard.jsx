import { Link } from "react-router-dom";

const AlumniCard = ({ alumni }) => {

  return (
    <div className="bg-white rounded-3xl shadow overflow-hidden">

      <img
        src={
          alumni.profileImage ||
          "https://i.pravatar.cc/400"
        }
        alt={alumni.firstName}
        className="h-60 w-full object-cover"
      />

      <div className="p-6">

        <h3 className="font-bold text-xl">
          {alumni.firstName} {alumni.lastName}
        </h3>

        <p>{alumni.branch}</p>

        <p>Batch {alumni.graduationYear}</p>

        <p>{alumni.company}</p>

        <p>{alumni.location}</p>

        <div className="flex gap-3 mt-5">

          <Link
            to={`/alumni/${alumni.id}`}
            className="
            flex-1
            text-center
            bg-blue-600
            text-white
            py-2
            rounded-xl
            "
          >
            View Profile
          </Link>

        </div>

      </div>

    </div>
  );
};

export default AlumniCard;