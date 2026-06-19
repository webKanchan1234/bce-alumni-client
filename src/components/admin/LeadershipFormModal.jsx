import {
  useState,
  useEffect,
} from "react";

import {
  createLeadership,
  updateLeadership,
  uploadLeadershipImage,
} from "../../api/leadershipApi";

import {
  successToast,
  errorToast,
} from "../../utils/toast";

const LeadershipFormModal = ({
  open,
  onClose,
  onSuccess,
  leader,
}) => {

  const [loading, setLoading] =
    useState(false);

  const [formData, setFormData] =
    useState({
      name: "",
      role: "",
      company: "",
      image: "",
      bio: "",
      linkedinUrl: "",
    });

  useEffect(() => {

    if (leader) {

      setFormData({
        name:
          leader.name || "",
        role:
          leader.role || "",
        company:
          leader.company || "",
        image:
          leader.image || "",
        bio:
          leader.bio || "",
        linkedinUrl:
          leader.linkedinUrl || "",
      });

    } else {

      setFormData({
        name: "",
        role: "",
        company: "",
        image: "",
        bio: "",
        linkedinUrl: "",
      });

    }

  }, [leader]);

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

      const file =
        e.target.files[0];

      if (!file) return;

      try {

        setLoading(true);

        const uploadData =
          new FormData();

        uploadData.append(
          "file",
          file
        );

        const response =
          await uploadLeadershipImage(
            uploadData
          );

        setFormData((prev) => ({
          ...prev,
          image:
            response.data.imageUrl,
        }));

        successToast(
          "Image uploaded successfully"
        );

      } catch (error) {

        console.error(error);

        errorToast(
          "Image upload failed"
        );

      } finally {

        setLoading(false);
      }
    };

  const handleSubmit =
    async () => {

      if (
        !formData.name.trim()
      ) {

        return errorToast(
          "Name is required"
        );
      }

      if (
        !formData.role.trim()
      ) {

        return errorToast(
          "Role is required"
        );
      }

      try {

        setLoading(true);

        const payload = {
          ...formData,
          active: true,
          displayOrder: 1,
        };

        if (leader?.id) {

          await updateLeadership(
            leader.id,
            payload
          );

          successToast(
            "Leader updated successfully"
          );

        } else {

          await createLeadership(
            payload
          );

          successToast(
            "Leader added successfully"
          );
        }

        onSuccess?.();

        onClose();

      } catch (error) {

        console.error(error);

        errorToast(
          error?.response?.data
            ?.message ||
          "Failed to save leader"
        );

      } finally {

        setLoading(false);
      }
    };

  return (

    <div
      className="
      fixed inset-0
      bg-black/50
      flex items-center justify-center
      z-50
      p-4
      "
    >

      <div
        className="
        bg-white
        rounded-3xl
        p-8
        w-full
        max-w-3xl
        max-h-[90vh]
        overflow-y-auto
        "
      >

        <h2
          className="
          text-3xl
          font-bold
          mb-6
          "
        >

          {leader
            ? "Edit Leader"
            : "Add Leader"}

        </h2>

        <div className="space-y-4">

          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Leader Name"
            className="
            w-full
            border
            p-3
            rounded-xl
            "
          />

          <input
            name="role"
            value={formData.role}
            onChange={handleChange}
            placeholder="Role"
            className="
            w-full
            border
            p-3
            rounded-xl
            "
          />

          <input
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Company / Batch"
            className="
            w-full
            border
            p-3
            rounded-xl
            "
          />

          <input
            name="linkedinUrl"
            value={
              formData.linkedinUrl
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

          <div>

            <label
              className="
              block
              font-medium
              mb-2
              "
            >
              Leader Photo
            </label>

            <input
              type="file"
              accept="image/*"
              onChange={
                handleImageUpload
              }
              className="
              w-full
              border
              p-3
              rounded-xl
              "
            />

          </div>

          {formData.image && (

            <div className="mt-3">

              <img
                src={
                  formData.image
                }
                alt="Leader"
                className="
                w-32
                h-32
                rounded-full
                object-cover
                border-4
                border-blue-100
                "
              />

            </div>

          )}

          <textarea
            rows="5"
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            placeholder="Leader Bio"
            className="
            w-full
            border
            p-3
            rounded-xl
            "
          />

        </div>

        <div
          className="
          flex
          gap-4
          mt-8
          "
        >

          <button
            onClick={
              handleSubmit
            }
            disabled={loading}
            className="
            bg-blue-600
            hover:bg-blue-700
            disabled:bg-gray-400
            text-white
            px-6
            py-3
            rounded-xl
            "
          >
            {loading
              ? "Processing..."
              : leader
                  ? "Update Leader"
                  : "Save Leader"}
          </button>

          <button
            onClick={onClose}
            className="
            border
            px-6
            py-3
            rounded-xl
            "
          >
            Cancel
          </button>

        </div>

      </div>

    </div>

  );
};

export default LeadershipFormModal;