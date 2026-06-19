import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import {
  getJobById,
  applyJob,
  requestReferral,
} from "../../api/jobApi";

import {
  successToast,
  errorToast,
} from "../../utils/toast";

const JobDetails = () => {

  const { id } = useParams();

  const [job, setJob] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  const [applying, setApplying] =
    useState(false);

  const [referralLoading, setReferralLoading] =
    useState(false);

  useEffect(() => {

    const loadJob = async () => {

      try {

        const response =
          await getJobById(id);

        setJob(response.data);

      } catch (error) {

        console.error(error);

        errorToast(
          "Failed to load job details"
        );

      } finally {

        setLoading(false);
      }
    };

    loadJob();

  }, [id]);

  console.log("Job Details:", job);

  const handleApply =
    async () => {

      try {

        setApplying(true);

        await applyJob(id);

        successToast(
          "Application submitted successfully 🎉"
        );

      } catch (error) {

        errorToast(
          error?.response?.data?.message ||
          "Failed to apply"
        );

      } finally {

        setApplying(false);
      }
    };

  const handleReferral =
    async () => {

      try {

        setReferralLoading(true);

        await requestReferral(id);

        successToast(
          "Referral request sent successfully 🚀"
        );

      } catch (error) {

        errorToast(
          error?.response?.data?.message ||
          "Failed to request referral"
        );

      } finally {

        setReferralLoading(false);
      }
    };

  if (loading) {

    return (
      <div className="max-w-5xl mx-auto py-10 px-6">
        Loading Job Details...
      </div>
    );
  }

  if (!job) {

    return (
      <div className="max-w-5xl mx-auto py-10 px-6">
        Job Not Found
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto py-10 px-6">

      <div className="bg-white rounded-3xl shadow p-8">

        <h1 className="text-4xl font-bold">
          {job.title}
        </h1>

        <p className="text-blue-600 mt-2 text-xl">
          {job.company}
        </p>

        <div className="mt-6 space-y-3">

          <p>
            📍 {job.location}
          </p>

          <p>
            💰 {job.salary}
          </p>

          <p>
            👨‍💻 {job.experience}
          </p>

          <p>
            📅 Apply Before:
            {" "}
            {job.deadline}
          </p>

          <p>
            Posted By:
            {" "}
            {job.postedBy}
          </p>

        </div>

        <div className="mt-8">

          <h2 className="text-2xl font-bold mb-4">
            Description
          </h2>

          <p className="leading-8">
            {job.description}
          </p>

        </div>

        <div className="flex gap-4 mt-8">

          <button
            onClick={handleApply}
            disabled={applying}
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
            {applying
              ? "Applying..."
              : "Apply Now"}
          </button>

          <button
            onClick={handleReferral}
            disabled={referralLoading}
            className="
            border
            border-blue-600
            text-blue-600
            px-8
            py-3
            rounded-xl
            hover:bg-blue-50
            "
          >
            {referralLoading
              ? "Sending..."
              : "Request Referral"}
          </button>

        </div>

      </div>

    </div>
  );
};

export default JobDetails;