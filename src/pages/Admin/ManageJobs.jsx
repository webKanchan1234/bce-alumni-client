import { useEffect, useState } from "react";

import JobStats from "../../components/admin/JobStats";
import JobTable from "../../components/admin/JobTable";
import JobFormModal from "../../components/admin/JobFormModal";

import {
  getJobs,
  deleteJob,
} from "../../api/jobApi";

import {
  successToast,
  errorToast,
} from "../../utils/toast";

const ManageJobs = () => {

  const [open, setOpen] =
    useState(false);

  const [jobs, setJobs] =
    useState([]);

  const [loading, setLoading] =
    useState(true);
    const [selectedJob, setSelectedJob] =
  useState(null);

  const loadJobs = async () => {

    try {

      const response =
        await getJobs();

      setJobs(
        response.data
      );

    } catch (error) {

      console.error(error);

      errorToast(
        "Failed to load jobs"
      );

    } finally {

      setLoading(false);
    }
  };

  useEffect(() => {
    loadJobs();
  }, []);

  const handleDelete =
  async (id) => {

    const confirmed =
      window.confirm(
        "Delete this job?"
      );

    if (!confirmed) return;

    try {

      await deleteJob(id);

      successToast(
        "Job deleted successfully"
      );

      loadJobs();

    } catch (error) {

      console.error(error);

      errorToast(
        "Failed to delete job"
      );
    }
  };

  return (
    <div>

      <div
        className="
        flex
        justify-between
        items-center
        mb-8
        "
      >

        <h1
          className="
          text-4xl
          font-bold
          "
        >
          Manage Jobs
        </h1>

        <button
  onClick={() => {

    setSelectedJob(null);
    setOpen(true);

  }}
  className="
  bg-blue-600
  text-white
  px-6
  py-3
  rounded-xl
  "
>
  + Post Job
</button>

      </div>

      <JobStats />

      {loading ? (

        <div
          className="
          bg-white
          rounded-2xl
          shadow
          p-10
          text-center
          "
        >
          Loading jobs...
        </div>

      ) : (

        <JobTable
  jobs={jobs}
  onEdit={(job) => {

    setSelectedJob(job);

    setOpen(true);

  }}
  onDelete={handleDelete}
/>

      )}

      <JobFormModal
  open={open}
  job={selectedJob}
  onClose={() => {

    setOpen(false);

    setSelectedJob(null);

  }}
  onSuccess={() => {

    loadJobs();

    setOpen(false);

    setSelectedJob(null);

  }}
/>

    </div>
  );
};

export default ManageJobs;