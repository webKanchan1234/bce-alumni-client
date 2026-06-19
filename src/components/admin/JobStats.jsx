import { useEffect, useState } from "react";

import { getJobs } from "../../api/jobApi";

import { errorToast } from "../../utils/toast";

const JobStats = () => {

  const [stats, setStats] =
    useState({
      totalJobs: 0,
      activeJobs: 0,
      expiredJobs: 0,
    });

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    const loadStats = async () => {

      try {

        const response =
          await getJobs();

        const jobs =
          response.data || [];

        const today =
          new Date();

        const activeJobs =
          jobs.filter(
            (job) =>
              new Date(
                job.deadline
              ) >= today
          ).length;

        const expiredJobs =
          jobs.filter(
            (job) =>
              new Date(
                job.deadline
              ) < today
          ).length;

        setStats({
          totalJobs:
            jobs.length,
          activeJobs,
          expiredJobs,
        });

      } catch (error) {

        console.error(error);

        errorToast(
          "Failed to load job statistics"
        );

      } finally {

        setLoading(false);
      }
    };

    loadStats();

  }, []);

  const cards = [
    {
      title: "Total Jobs",
      value: stats.totalJobs,
    },
    {
      title: "Active Jobs",
      value: stats.activeJobs,
    },
    {
      title: "Expired Jobs",
      value: stats.expiredJobs,
    },
  ];

  if (loading) {

    return (
      <div className="grid md:grid-cols-3 gap-6 mb-8">

        {[1, 2, 3].map((item) => (

          <div
            key={item}
            className="
            bg-white
            p-6
            rounded-2xl
            shadow
            animate-pulse
            h-32
            "
          />

        ))}

      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-3 gap-6 mb-8">

      {cards.map((item) => (

        <div
          key={item.title}
          className="
          bg-white
          p-6
          rounded-2xl
          shadow
          hover:shadow-lg
          transition
          "
        >

          <h3 className="text-gray-500">
            {item.title}
          </h3>

          <p
            className="
            text-4xl
            font-bold
            mt-2
            text-blue-700
            "
          >
            {item.value}
          </p>

        </div>

      ))}

    </div>
  );
};

export default JobStats;