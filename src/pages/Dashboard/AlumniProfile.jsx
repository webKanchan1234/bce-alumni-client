import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGraduationCap,
  FaBuilding,
} from "react-icons/fa";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getAlumniById } from "../../api/alumniApi";
import { errorToast } from "../../utils/toast";

const AlumniProfile = () => {

  const { id } = useParams();

  const [alumni, setAlumni] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    const fetchAlumni =
      async () => {

        try {

          const response =
            await getAlumniById(id);

          setAlumni(
            response.data
          );

        } catch (error) {

          console.error(error);

          errorToast(
            "Failed to load alumni profile"
          );

        } finally {

          setLoading(false);
        }
      };

    fetchAlumni();

  }, [id]);

  if (loading) {
    return (
      <div className="text-center py-20">
        Loading profile...
      </div>
    );
  }

  if (!alumni) {
    return (
      <div className="text-center py-20">
        Alumni not found
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto">

      {/* Header */}

      <div className="bg-white rounded-3xl shadow p-8">

        <div className="flex flex-col lg:flex-row gap-8">

          <img
            src={
              alumni.profileImage ||
              "https://i.pravatar.cc/400"
            }
            alt={alumni.firstName}
            className="
            w-40
            h-40
            rounded-full
            object-cover
            "
          />

          <div className="flex-1">

            <h1 className="text-4xl font-bold">
              {alumni.firstName} {alumni.lastName}
            </h1>

            <p className="text-xl text-blue-600 mt-2">
              {alumni.designation || "Alumni"}
            </p>

            <p className="flex items-center gap-2 mt-3">
              <FaBuilding />
              {alumni.company || "Not Provided"}
            </p>

            <p className="flex items-center gap-2 mt-2">
              <FaGraduationCap />
              Batch {alumni.graduationYear}
              {" • "}
              {alumni.branch}
            </p>

            <p className="flex items-center gap-2 mt-2">
              <FaMapMarkerAlt />
              {alumni.location || "India"}
            </p>

            <div className="flex gap-4 mt-6">

              <button
                className="
                bg-blue-600
                text-white
                px-6
                py-3
                rounded-xl
                hover:bg-blue-700
                "
              >
                Connect
              </button>

              <button
                className="
                border
                border-blue-600
                text-blue-600
                px-6
                py-3
                rounded-xl
                hover:bg-blue-50
                "
              >
                Message
              </button>

            </div>

          </div>

        </div>

      </div>

      {/* About */}

      <div className="bg-white rounded-3xl shadow p-8 mt-8">

        <h2 className="text-2xl font-bold mb-4">
          About
        </h2>

        <p className="text-gray-600 leading-8">

          {alumni.bio ||
            "No profile summary added yet."}

        </p>

      </div>

      {/* Skills */}

      <div className="bg-white rounded-3xl shadow p-8 mt-8">

        <h2 className="text-2xl font-bold mb-6">
          Skills
        </h2>

        <div className="flex flex-wrap gap-3">

          {alumni.skills?.length > 0 ? (

            alumni.skills.map((skill) => (
              <span
                key={skill}
                className="
                bg-blue-100
                text-blue-700
                px-4
                py-2
                rounded-full
                "
              >
                {skill}
              </span>
            ))

          ) : (

            <p className="text-gray-500">
              No skills added.
            </p>

          )}

        </div>

      </div>

      {/* Contact */}

      <div className="bg-white rounded-3xl shadow p-8 mt-8">

        <h2 className="text-2xl font-bold mb-6">
          Contact Information
        </h2>

        <div className="space-y-4">

          <p className="flex items-center gap-3">
            <FaEnvelope />
            {alumni.email}
          </p>

          {alumni.linkedinUrl && (
            <a
              href={alumni.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="
              flex
              items-center
              gap-3
              text-blue-600
              "
            >
              <FaLinkedin />
              LinkedIn Profile
            </a>
          )}

          {alumni.githubUrl && (
            <a
              href={alumni.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="
              flex
              items-center
              gap-3
              text-blue-600
              "
            >
              <FaGithub />
              GitHub Profile
            </a>
          )}

        </div>

      </div>

    </div>
  );
};

export default AlumniProfile;