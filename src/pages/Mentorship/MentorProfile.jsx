import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import {
  getMentorById,
  requestMentorship,
} from "../../api/mentorApi";

import {
  successToast,
  errorToast,
} from "../../utils/toast";

const MentorProfile = () => {

  const { id } = useParams();

  const [mentor, setMentor] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  const [requesting, setRequesting] =
    useState(false);

  useEffect(() => {

    const loadMentor =
      async () => {

        try {

          const response =
            await getMentorById(id);

          setMentor(
            response.data
          );

        } catch (error) {

          console.error(error);

          errorToast(
            "Failed to load mentor profile"
          );

        } finally {

          setLoading(false);
        }
      };

    loadMentor();

  }, [id]);

  const handleRequest =
    async () => {

      try {

        setRequesting(true);

        await requestMentorship(id);

        successToast(
          "Mentorship request sent successfully 🎉"
        );

      } catch (error) {

        errorToast(
          error?.response?.data?.message ||
          "Failed to send request"
        );

      } finally {

        setRequesting(false);
      }
    };

  if (loading) {

    return (
      <div className="max-w-5xl mx-auto py-10 px-6">
        Loading Mentor...
      </div>
    );
  }

  if (!mentor) {

    return (
      <div className="max-w-5xl mx-auto py-10 px-6">
        Mentor Not Found
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto py-10 px-6">

      <div className="bg-white rounded-3xl shadow p-8">

        <div className="flex flex-col md:flex-row gap-8">

          <img
            src={
              mentor.profileImage ||
              "https://via.placeholder.com/200"
            }
            alt={mentor.firstName}
            className="
            w-40
            h-40
            rounded-full
            object-cover
            "
          />

          <div>

            <h1 className="text-4xl font-bold">
              {mentor.firstName}
              {" "}
              {mentor.lastName}
            </h1>

            <p className="text-blue-600 mt-2">
              {mentor.company}
            </p>

            <p>
              {mentor.designation}
            </p>

            <p className="mt-3">
              Experience:
              {" "}
              {mentor.experience}
              {" "}
              Years
            </p>

            <p className="mt-3 text-gray-600">
              {mentor.bio}
            </p>

          </div>

        </div>

        <div className="mt-8 flex gap-4">

          <button
            onClick={handleRequest}
            disabled={requesting}
            className="
            bg-blue-600
            text-white
            px-8
            py-3
            rounded-xl
            hover:bg-blue-700
            disabled:bg-gray-400
            "
          >
            {requesting
              ? "Sending..."
              : "Request Mentorship"}
          </button>

          <Link
            to="/dashboard/mentorship"
            className="
            border
            border-blue-600
            text-blue-600
            px-8
            py-3
            rounded-xl
            "
          >
            Back
          </Link>

        </div>

      </div>

    </div>
  );
};

export default MentorProfile;