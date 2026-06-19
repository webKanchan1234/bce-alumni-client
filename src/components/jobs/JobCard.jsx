import { Link } from "react-router-dom";

const JobCard = ({ job }) => {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-6 hover:shadow-2xl transition">

      <div className="flex justify-between items-start">

        <div>
          <h3 className="text-2xl font-bold">
            {job.position}
          </h3>

          <p className="text-blue-600 mt-1">
            {job.company}
          </p>
        </div>

        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">
          Active
        </span>

      </div>

      <div className="mt-4 space-y-2">

        <p>📍 {job.location}</p>

        <p>💰 {job.salary}</p>

        <p>👨‍💻 {job.experience}</p>

        <p>Posted By: {job.postedBy}</p>

      </div>

      <div className="flex gap-3 mt-6">

        <Link
          to={`/jobs/${job.id}`}
          className="
          flex-1
          text-center
          bg-blue-600
          text-white
          py-3
          rounded-xl
          "
        >
          View Job
        </Link>

        <button
          className="
          flex-1
          border
          border-blue-600
          text-blue-600
          rounded-xl
          "
        >
          Request Referral
        </button>

      </div>

    </div>
  );
};

export default JobCard;