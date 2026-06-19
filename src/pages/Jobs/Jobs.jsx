import { useEffect, useState } from "react";

import JobCard from "../../components/jobs/JobCard";
import JobSearch from "../../components/jobs/JobSearch";
import JobFilters from "../../components/jobs/JobFilters";

import { getJobs } from "../../api/jobApi";

import { errorToast } from "../../utils/toast";

const Jobs = () => {

  const [jobs, setJobs] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [search, setSearch] =
    useState("");

  const [location, setLocation] =
    useState("");

  useEffect(() => {

    const loadJobs =
      async () => {

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

    loadJobs();

  }, []);

  const filteredJobs =
    jobs.filter((job) => {

      const title =
        (
          job.title ||
          job.position ||
          ""
        ).toLowerCase();

      return (

        title.includes(
          search.toLowerCase()
        )

        &&

        (
          location === "" ||

          job.location ===
          location
        )

      );
    });

  const locations =
    [
      ...new Set(
        jobs
          .map(
            (job) =>
              job.location
          )
          .filter(Boolean)
      ),
    ];

  return (
    <div
      className="
      max-w-7xl
      mx-auto
      py-10
      px-6
      "
    >

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
          Jobs & Referrals
        </h1>

      </div>

      <div
        className="
        flex
        flex-col
        lg:flex-row
        gap-4
        mb-10
        "
      >

        <JobSearch
          search={search}
          setSearch={setSearch}
        />

        <JobFilters
          location={location}
          setLocation={setLocation}
          locations={locations}
        />

      </div>

      {loading ? (

        <div
          className="
          text-center
          py-20
          "
        >
          Loading jobs...
        </div>

      ) : filteredJobs.length === 0 ? (

        <div
          className="
          text-center
          py-20
          text-gray-500
          "
        >
          No jobs found
        </div>

      ) : (

        <div
          className="
          grid
          lg:grid-cols-2
          gap-8
          "
        >

          {filteredJobs.map(
            (job) => (

              <JobCard
                key={job.id}
                job={job}
              />

            )
          )}

        </div>

      )}

    </div>
  );
};

export default Jobs;