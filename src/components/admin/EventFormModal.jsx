import { useEffect, useState } from "react";

import { createEvent, updateEvent } from "../../api/eventApi";

import {
  successToast,
  errorToast,
} from "../../utils/toast";
import { uploadImage } from "../../api/uploadApi";

const EventFormModal = ({
  open,
  onClose,
  onSuccess,
  event,
}) => {

  const [loading, setLoading] =
    useState(false);

  const [uploading, setUploading] =
    useState(false);

  const [formData, setFormData] =
  useState({
    title: "",
    eventDate: "",
    eventTime: "",
    location: "",
    description: "",
    imageUrl: "",
  });

    useEffect(() => {

  if (event) {

    setFormData({
  title: event.title || "",
  eventDate: event.eventDate || "",
  eventTime: event.eventTime || "",
  location: event.location || "",
  description: event.description || "",
  imageUrl: event.imageUrl || "",
});

  }

}, [event]);

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

        setUploading(true);

        const imageUrl =
          await uploadImage(file);

          console.log("Uploaded Image URL:", imageUrl);

        setFormData((prev) => ({
          ...prev,
          imageUrl: imageUrl,
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

        setUploading(false);
      }
    };

  const handleSubmit =
  async () => {
    if (
  !formData.title ||
  !formData.eventDate ||
  !formData.eventTime
) {

  errorToast(
    "Title, Date and Time are required"
  );

  return;
}

    try {

      setLoading(true);

      if (event?.id) {

        console.log("Updating Event:", event.id, formData);

        await updateEvent(
          event.id,
          formData
        );

        successToast(
          "Event updated successfully"
        );

      } else {

        await createEvent(
          formData
        );

        successToast(
          "Event created successfully"
        );
      }

      onSuccess();

    } catch (error) {

      console.error(error);

      errorToast(
        "Failed to save event"
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
        w-full
        max-w-2xl
        rounded-3xl
        p-8
        max-h-[90vh]
        overflow-y-auto
        "
      >

        <h2 className="text-3xl font-bold mb-6">

  {event
    ? "Edit Event"
    : "Create Event"}

</h2>

        <div className="space-y-4">

          <input
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Event Title"
            className="
            w-full
            border
            p-3
            rounded-xl
            "
          />

          <div className="grid md:grid-cols-2 gap-4">

  <input
    type="date"
    name="eventDate"
    value={formData.eventDate}
    onChange={handleChange}
    className="
    w-full
    border
    p-3
    rounded-xl
    "
  />

  <input
    type="time"
    name="eventTime"
    value={formData.eventTime}
    onChange={handleChange}
    className="
    w-full
    border
    p-3
    rounded-xl
    "
  />

</div>

          <input
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Location"
            className="
            w-full
            border
            p-3
            rounded-xl
            "
          />

          {/* Image Upload */}

          <div>

            <label
              className="
              block
              mb-2
              font-medium
              "
            >
              Event Banner
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

          {uploading && (

            <p className="text-blue-600">
              Uploading image...
            </p>

          )}

          {formData.imageUrl && (

            <img
              src={formData.imageUrl}
              alt="preview"
              className="
              w-full
              h-48
              rounded-xl
              object-cover
              border
              "
            />

          )}

          <textarea
            rows="5"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Description"
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
          justify-end
          gap-4
          mt-8
          "
        >

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

          <button
  onClick={handleSubmit}
  disabled={loading}
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
    : event
      ? "Update Event"
      : "Save Event"}
</button>

        </div>

      </div>

    </div>
  );
};

export default EventFormModal;