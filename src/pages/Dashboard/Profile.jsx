import { useEffect, useState } from "react";

import {
  getCurrentUser,
  updateProfile,
} from "../../api/userApi";

import { uploadImage }
from "../../api/uploadApi";

import {
  successToast,
  errorToast,
} from "../../utils/toast";

const Profile = () => {

  const [user, setUser] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  const [saving, setSaving] =
    useState(false);

  const [editMode, setEditMode] =
    useState(false);

  const [formData, setFormData] =
    useState({});

  useEffect(() => {

    const loadProfile =
      async () => {

        try {

          const response =
            await getCurrentUser();

          setUser(
            response.data
          );

          setFormData(
            response.data
          );

        } catch (error) {

          console.error(error);

          errorToast(
            "Failed to load profile"
          );

        } finally {

          setLoading(false);
        }
      };

    loadProfile();

  }, []);

  console.log(user);
  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleImageUpload =
    async (e) => {

      const file =
        e.target.files[0];

      if (!file) return;

      try {

        const imageUrl =
          await uploadImage(file);

        setFormData((prev) => ({
          ...prev,
          profileImage:
            imageUrl,
        }));

        successToast(
          "Profile image uploaded"
        );

      } catch (error) {

        console.error(error);

        errorToast(
          "Upload failed"
        );
      }
    };

  const handleSave =
    async () => {

      try {

        setSaving(true);

        const payload = {
  firstName: user.firstName,
  lastName: user.lastName,
  graduationYear: user.graduationYear,
  branch: user.branch,

  company: formData.company,
  designation: formData.designation,
  location: formData.location,
  bio: formData.bio,
  linkedinUrl: formData.linkedinUrl,
  githubUrl: formData.githubUrl,
  profileImage: formData.profileImage,
};

        console.log("Payload:", payload);

        const response =
          await updateProfile(
            payload
          );

        setUser(
          response.data
        );

        setFormData(
          response.data
        );

        setEditMode(false);

        successToast(
          "Profile updated successfully"
        );

      } catch (error) {

        console.error(error);

        errorToast(
          "Failed to update profile"
        );

      } finally {

        setSaving(false);
      }
    };

  if (loading) {

    return (
      <div className="p-10">
        Loading Profile...
      </div>
    );
  }

  return (

    <div
      className="
      max-w-6xl
      mx-auto
      px-4
      "
    >

      <h1
        className="
        text-4xl
        font-bold
        mb-8
        "
      >
        My Profile
      </h1>

      <div
        className="
        bg-white
        rounded-3xl
        shadow
        p-8
        "
      >

        <div
          className="
          flex
          flex-col
          lg:flex-row
          gap-10
          "
        >

          {/* Image Section */}

          <div
            className="
            flex
            flex-col
            items-center
            "
          >

            <img
              src={
                formData.profileImage ||
                "https://via.placeholder.com/200"
              }
              alt="Profile"
              className="
              w-48
              h-48
              rounded-full
              object-cover
              border-4
              border-blue-100
              "
            />

            {editMode && (

              <input
                type="file"
                accept="image/*"
                onChange={
                  handleImageUpload
                }
                className="
                mt-4
                w-full
                "
              />

            )}

          </div>

          {/* Details */}

          <div className="flex-1">

            <h2
              className="
              text-3xl
              font-bold
              "
            >
              {user?.firstName}
              {" "}
              {user?.lastName}
            </h2>

            <p
              className="
              text-gray-500
              mt-2
              "
            >
              {user?.email}
            </p>

            <div
              className="
              grid
              md:grid-cols-2
              gap-6
              mt-8
              "
            >

              <div>

                <p className="text-gray-500">
                  Graduation Year
                </p>

                <h3 className="font-semibold">
                  {user?.graduationYear}
                </h3>

              </div>

              <div>

                <p className="text-gray-500">
                  Branch
                </p>

                <h3 className="font-semibold">
                  {user?.branch}
                </h3>

              </div>

              <div>

                <p className="text-gray-500">
                  Company
                </p>

                {editMode ? (

                  <input
                    name="company"
                    value={
                      formData.company || ""
                    }
                    onChange={handleChange}
                    className="
                    border
                    rounded-lg
                    p-2
                    w-full
                    "
                  />

                ) : (

                  <h3 className="font-semibold">
                    {user?.company ||
                      "Not Added"}
                  </h3>

                )}

              </div>

              <div>

                <p className="text-gray-500">
                  Designation
                </p>

                {editMode ? (

                  <input
                    name="designation"
                    value={
                      formData.designation || ""
                    }
                    onChange={handleChange}
                    className="
                    border
                    rounded-lg
                    p-2
                    w-full
                    "
                  />

                ) : (

                  <h3 className="font-semibold">
                    {user?.designation ||
                      "Not Added"}
                  </h3>

                )}

              </div>

              <div>

                <p className="text-gray-500">
                  Location
                </p>

                {editMode ? (

                  <input
                    name="location"
                    value={
                      formData.location || ""
                    }
                    onChange={handleChange}
                    className="
                    border
                    rounded-lg
                    p-2
                    w-full
                    "
                  />

                ) : (

                  <h3 className="font-semibold">
                    {user?.location ||
                      "Not Added"}
                  </h3>

                )}

              </div>

              <div>

                <p className="text-gray-500">
                  Role
                </p>

                <h3 className="font-semibold">
                  {user?.role}
                </h3>

              </div>

            </div>

            {/* Bio */}

            <div className="mt-8">

              <p className="text-gray-500">
                Bio
              </p>

              {editMode ? (

                <textarea
                  rows="4"
                  name="bio"
                  value={
                    formData.bio || ""
                  }
                  onChange={handleChange}
                  className="
                  w-full
                  border
                  rounded-xl
                  p-3
                  mt-2
                  "
                />

              ) : (

                <p className="mt-2">
                  {user?.bio ||
                    "No bio available"}
                </p>

              )}

            </div>

            {/* Social Links */}

            <div className="mt-8 space-y-4">

              {editMode ? (

                <>
                  <input
                    name="linkedinUrl"
                    value={
                      formData.linkedinUrl || ""
                    }
                    onChange={handleChange}
                    placeholder="LinkedIn URL"
                    className="
                    w-full
                    border
                    p-3
                    rounded-xl
                    "
                  />

                  <input
                    name="githubUrl"
                    value={
                      formData.githubUrl || ""
                    }
                    onChange={handleChange}
                    placeholder="GitHub URL"
                    className="
                    w-full
                    border
                    p-3
                    rounded-xl
                    "
                  />
                </>

              ) : (

                <div className="flex gap-6">

                  {user?.linkedinUrl && (

                    <a
                      href={
                        user.linkedinUrl
                      }
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-600 font-semibold"
                    >
                      LinkedIn
                    </a>

                  )}

                  {user?.githubUrl && (

                    <a
                      href={
                        user.githubUrl
                      }
                      target="_blank"
                      rel="noreferrer"
                      className="font-semibold"
                    >
                      GitHub
                    </a>

                  )}

                </div>

              )}

            </div>

            {/* Buttons */}

            <div
              className="
              flex
              gap-4
              mt-10
              "
            >

              {editMode ? (

                <>
                  <button
                    onClick={
                      handleSave
                    }
                    disabled={saving}
                    className="
                    bg-green-600
                    text-white
                    px-6
                    py-3
                    rounded-xl
                    "
                  >
                    {saving
                      ? "Saving..."
                      : "Save Changes"}
                  </button>

                  <button
                    onClick={() =>
                      setEditMode(false)
                    }
                    className="
                    border
                    px-6
                    py-3
                    rounded-xl
                    "
                  >
                    Cancel
                  </button>
                </>

              ) : (

                <button
                  onClick={() =>
                    setEditMode(true)
                  }
                  className="
                  bg-blue-600
                  text-white
                  px-6
                  py-3
                  rounded-xl
                  "
                >
                  Edit Profile
                </button>

              )}

            </div>

          </div>

        </div>

      </div>

    </div>

  );
};

export default Profile;