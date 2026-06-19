import {
  useEffect,
  useState,
} from "react";

import {
  createJob,
  updateJob,
} from "../../api/jobApi";

import {
  successToast,
  errorToast,
} from "../../utils/toast";

const JobFormModal = ({
  open,
  onClose,
  onSuccess,
  job,
}) => {

  const [loading, setLoading] =
    useState(false);

  const [formData, setFormData] =
    useState({
      company: "",
      title: "",
      location: "",
      experience: "",
      salary: "",
      description: "",
      applyLink: "",
      postedBy: "",
      active: true,
    });

  useEffect(() => {

    if (job) {

      setFormData({
        company: job.company || "",
        title: job.title || "",
        location: job.location || "",
        experience: job.experience || "",
        salary: job.salary || "",
        description: job.description || "",
        applyLink: job.applyLink || "",
        postedBy: job.postedBy || "",
        active:
          job.active ?? true,
      });

    } else {

      setFormData({
        company: "",
        title: "",
        location: "",
        experience: "",
        salary: "",
        description: "",
        applyLink: "",
        postedBy: "",
        active: true,
      });
    }

  }, [job]);

  if (!open) return null;





  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit =
    async () => {

      try {
if (
  !formData.company ||
  !formData.title
) {

  errorToast(
    "Company and Job Title are required"
  );

  return;
}
        setLoading(true);

        if (job?.id) {

          await updateJob(
            job.id,
            formData
          );

          successToast(
            "Job updated successfully"
          );

        } else {

          await createJob(
            formData
          );

          successToast(
            "Job posted successfully"
          );
        }

        onSuccess();

      } catch (error) {

        console.error(error);

        errorToast(
          "Failed to save job"
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
        max-w-2xl
        "
      >

        <h2
          className="
          text-3xl
          font-bold
          mb-6
          "
        >
          {job
            ? "Edit Job"
            : "Post New Job"}
        </h2>

        <div className="space-y-4">

          <input
  name="company"
  value={formData.company}
  onChange={handleChange}
  placeholder="Company Name"
  className="w-full border p-3 rounded-xl"
/>

<input
  name="title"
  value={formData.title}
  onChange={handleChange}
  placeholder="Job Title"
  className="w-full border p-3 rounded-xl"
/>

<input
  name="location"
  value={formData.location}
  onChange={handleChange}
  placeholder="Location"
  className="w-full border p-3 rounded-xl"
/>

<input
  name="experience"
  value={formData.experience}
  onChange={handleChange}
  placeholder="Experience (3+ Years)"
  className="w-full border p-3 rounded-xl"
/>

<input
  name="salary"
  value={formData.salary}
  onChange={handleChange}
  placeholder="Salary (15 LPA)"
  className="w-full border p-3 rounded-xl"
/>

<input
  name="applyLink"
  value={formData.applyLink}
  onChange={handleChange}
  placeholder="Apply Link"
  className="w-full border p-3 rounded-xl"
/>

<input
  name="postedBy"
  value={formData.postedBy}
  onChange={handleChange}
  placeholder="Posted By"
  className="w-full border p-3 rounded-xl"
/>

<textarea
  rows="5"
  name="description"
  value={formData.description}
  onChange={handleChange}
  placeholder="Job Description"
  className="w-full border p-3 rounded-xl"
/>

<label className="flex items-center gap-3">

  <input
    type="checkbox"
    checked={formData.active}
    onChange={(e) =>
      setFormData({
        ...formData,
        active: e.target.checked,
      })
    }
  />

  Active Job

</label>

        </div>

        <div
          className="
          flex
          justify-end
          gap-4
          mt-6
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
            disabled={loading}
            className="
            bg-blue-600
            hover:bg-blue-700
            text-white
            px-6
            py-3
            rounded-xl
            "
          >
            {loading
              ? "Saving..."
              : job
                ? "Update Job"
                : "Publish Job"}
          </button>

        </div>

      </div>

    </div>

  );
};

export default JobFormModal;