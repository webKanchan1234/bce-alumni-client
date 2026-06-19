import { Link } from "react-router-dom";

const MentorCard = ({ mentor }) => {
  console.log(mentor)
  return (
    <div className="bg-white rounded-3xl shadow-lg overflow-hidden">

      <img
        src={mentor.profileImage}
        alt={mentor.name}
        className="w-full h-64 object-cover"
      />

      <div className="p-6">

        <h3 className="text-2xl font-bold">
          {mentor.name}
        </h3>

        <p className="text-blue-600">
          {mentor.company}
        </p>

        <p>{mentor.designation}</p>

        <p className="mt-2">
          {mentor.experience}
        </p>

        <div className="flex flex-wrap gap-2 mt-4">

          {mentor.skills?.map((skill) => (
            <span
              key={skill}
              className="
              bg-blue-100
              text-blue-700
              px-3
              py-1
              rounded-full
              "
            >
              {skill}
            </span>
          ))}

        </div>

        <Link
          to={`/dashboard/mentorship/${mentor.id}`}
          className="
          block
          text-center
          mt-6
          bg-blue-600
          text-white
          py-3
          rounded-xl
          "
        >
          View Profile
        </Link>

      </div>

    </div>
  );
};

export default MentorCard;