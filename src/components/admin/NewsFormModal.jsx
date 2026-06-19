import {
  useEffect,
  useState,
} from "react";

import {
  createNews,
  updateNews,
} from "../../api/newsApi";

import { uploadImage }
  from "../../api/uploadApi";

import {
  successToast,
  errorToast,
} from "../../utils/toast";

const NewsFormModal = ({
  open,
  onClose,
  onSuccess,
  news,
}) => {

  const [loading, setLoading] =
    useState(false);

  const [uploading, setUploading] =
    useState(false);

  const [formData, setFormData] =
    useState({
      title: "",
      category: "",
      description: "",
      imageUrl: "",
    });

  useEffect(() => {

    if (news) {

      setFormData({
        title:
          news.title || "",
        category:
          news.category || "",
        description:
          news.description || "",
        imageUrl:
          news.imageUrl || "",
      });

    } else {

      setFormData({
        title: "",
        category: "",
        description: "",
        imageUrl: "",
      });
    }

  }, [news]);

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

        setFormData((prev) => ({
          ...prev,
          imageUrl,
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

      try {

        if (!formData.title) {

          errorToast(
            "Title is required"
          );

          return;
        }

        setLoading(true);
        

        const payload = {
  title: formData.title,
  content: formData.description,
  imageUrl: formData.imageUrl,
  author: "Admin",
  featured: false,
};

if (news?.id) {
  await updateNews(news.id, payload);
} else {
  await createNews(payload);
}

        onSuccess();

      } catch (error) {

        console.error(error);

        errorToast(
          "Failed to save news"
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
          {news
            ? "Edit News"
            : "Create News"}
        </h2>

        <div className="space-y-4">

          <input
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="News Title"
            className="
            w-full
            border
            p-3
            rounded-xl
            "
          />

          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="
            w-full
            border
            p-3
            rounded-xl
            "
          >

            <option value="">
              Select Category
            </option>

            <option value="Achievement">
              Alumni Achievement
            </option>

            <option value="Event">
              Event
            </option>

            <option value="College Update">
              College Update
            </option>

            <option value="Startup">
              Startup
            </option>

          </select>

          {/* Image Upload */}

          <div>

            <label
              className="
              block
              font-medium
              mb-2
              "
            >
              News Image
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
              h-56
              rounded-xl
              object-cover
              border
              "
            />

          )}

          <textarea
            rows="6"
            name="description"
            value={
              formData.description
            }
            onChange={handleChange}
            placeholder="News Description"
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
            onClick={
              handleSubmit
            }
            disabled={
              loading ||
              uploading
            }
            className="
            bg-blue-600
            hover:bg-blue-700
            text-white
            px-6
            py-3
            rounded-xl
            disabled:opacity-50
            "
          >
            {loading
              ? "Saving..."
              : news
                ? "Update News"
                : "Publish News"}
          </button>

        </div>

      </div>

    </div>

  );
};

export default NewsFormModal;