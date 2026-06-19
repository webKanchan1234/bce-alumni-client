import {
  useEffect,
  useState,
} from "react";

import {
  createMentor,
  updateMentor,
} from "../../api/mentorApi";

import { uploadImage }
  from "../../api/uploadApi";

import {
  successToast,
  errorToast,
} from "../../utils/toast";

const MentorFormModal = ({
  open,
  onClose,
  onSuccess,
  mentor,
}) => {

  const [loading, setLoading] =
    useState(false);

  const [uploading, setUploading] =
    useState(false);

  const [formData, setFormData] =
    useState({
      name: "",
      company: "",
      designation: "",
      expertise: "",
      experienceYears: "",
      bio: "",
      profileImage: "",
      linkedinUrl: "",
      available: true,
    });

  useEffect(() => {

    if (mentor) {

      setFormData({
        name:
          mentor.name || "",
        company:
          mentor.company || "",
        designation:
          mentor.designation || "",
        expertise:
          mentor.expertise || "",
        experienceYears:
          mentor.experienceYears || "",
        bio:
          mentor.bio || "",
        profileImage:
          mentor.profileImage || "",
        linkedinUrl:
          mentor.linkedinUrl || "",
        available:
          mentor.available ?? true,
      });

    }

  }, [mentor]);

  if (!open) return null;

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleImageUpload =
    async (e) => {

      try {

        setUploading(true);

        const imageUrl =
          await uploadImage(
            e.target.files[0]
          );

        setFormData((prev) => ({
          ...prev,
          profileImage:
            imageUrl,
        }));

      } catch {

        errorToast(
          "Image upload failed"
        );

      } finally {

        setUploading(false);
      }
    };

  const handleSubmit =
    async () => {

      try {

        setLoading(true);

        if (mentor?.id) {

          await updateMentor(
            mentor.id,
            formData
          );

          successToast(
            "Mentor updated"
          );

        } else {

          await createMentor(
            formData
          );

          successToast(
            "Mentor created"
          );
        }

        onSuccess();

      } catch {

        errorToast(
          "Failed to save mentor"
        );

      } finally {

        setLoading(false);
      }
    };

  return (

    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 p-4">

      <div className="bg-white rounded-3xl p-8 w-full max-w-3xl max-h-[90vh] overflow-y-auto">

        <h2 className="text-3xl font-bold mb-6">

          {mentor
            ? "Edit Mentor"
            : "Add Mentor"}

        </h2>

        <div className="space-y-4">

          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="w-full border p-3 rounded-xl"
          />

          <input
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Company"
            className="w-full border p-3 rounded-xl"
          />

          <input
            name="designation"
            value={formData.designation}
            onChange={handleChange}
            placeholder="Designation"
            className="w-full border p-3 rounded-xl"
          />

          <input
            name="expertise"
            value={formData.expertise}
            onChange={handleChange}
            placeholder="Expertise"
            className="w-full border p-3 rounded-xl"
          />

          <input
            type="number"
            name="experienceYears"
            value={formData.experienceYears}
            onChange={handleChange}
            placeholder="Experience Years"
            className="w-full border p-3 rounded-xl"
          />

          <input
            name="linkedinUrl"
            value={formData.linkedinUrl}
            onChange={handleChange}
            placeholder="LinkedIn URL"
            className="w-full border p-3 rounded-xl"
          />

          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="w-full border p-3 rounded-xl"
          />

          {formData.profileImage && (

            <img
              src={formData.profileImage}
              alt=""
              className="w-32 h-32 rounded-full object-cover"
            />

          )}

          <textarea
            rows="5"
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            placeholder="Bio"
            className="w-full border p-3 rounded-xl"
          />

        </div>

        <div className="flex justify-end gap-4 mt-8">

          <button
            onClick={onClose}
            className="border px-6 py-3 rounded-xl"
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            disabled={
              loading ||
              uploading
            }
            className="
            bg-blue-600
            text-white
            px-6
            py-3
            rounded-xl
            "
          >
            {loading
              ? "Saving..."
              : "Save Mentor"}
          </button>

        </div>

      </div>

    </div>

  );
};

export default MentorFormModal;