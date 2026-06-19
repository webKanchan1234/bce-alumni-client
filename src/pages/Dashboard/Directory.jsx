import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { getPublicAlumni } from "../../api/alumniApi";

import {
  errorToast,
  successToast,
} from "../../utils/toast";

const ITEMS_PER_PAGE = 9;

const Directory = () => {

  const [alumni, setAlumni] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [search, setSearch] =
    useState("");

  const [batch, setBatch] =
    useState("");

  const [branch, setBranch] =
    useState("");

  const [company, setCompany] =
    useState("");

  const [currentPage, setCurrentPage] =
    useState(1);

  useEffect(() => {

    const loadAlumni =
      async () => {

        try {

          const response =
            await getPublicAlumni();

          setAlumni(
            response.data
          );

        } catch (error) {

          console.error(error);

          errorToast(
            "Failed to load alumni"
          );

        } finally {

          setLoading(false);
        }
      };

    loadAlumni();

  }, []);

  const filtered =
    alumni.filter((item) => {

      const fullName =
        `${item.firstName || ""}
         ${item.lastName || ""}`
          .toLowerCase();

      return (

        fullName.includes(
          search.toLowerCase()
        )

        &&

        (batch === "" ||
          String(
            item.graduationYear
          ) === batch)

        &&

        (branch === "" ||
          item.branch === branch)

        &&

        (company === "" ||
          item.company === company)

      );
    });

  const totalPages =
    Math.ceil(
      filtered.length /
      ITEMS_PER_PAGE
    );

  const startIndex =
    (currentPage - 1)
    * ITEMS_PER_PAGE;

  const paginatedAlumni =
    filtered.slice(
      startIndex,
      startIndex +
      ITEMS_PER_PAGE
    );

  const handleConnect =
    (alumni) => {

      successToast(
        `Connection request sent to ${alumni.firstName}`
      );
    };

  const branches =
    [...new Set(
      alumni
        .map(a => a.branch)
        .filter(Boolean)
    )];

  const companies =
    [...new Set(
      alumni
        .map(a => a.company)
        .filter(Boolean)
    )];

  const batches =
    [...new Set(
      alumni
        .map(a => a.graduationYear)
        .filter(Boolean)
    )];

  return (
    <>

      <div
        className="
        flex
        flex-col
        lg:flex-row
        justify-between
        gap-4
        mb-8
        "
      >

        <h1 className="text-3xl font-bold">
          Alumni Directory
        </h1>

        <input
          type="text"
          placeholder="Search Alumni..."
          value={search}
          onChange={(e) =>
            setSearch(
              e.target.value
            )
          }
          className="
          border
          p-3
          rounded-xl
          lg:w-80
          "
        />

      </div>

      {/* Filters */}

      <div
        className="
        grid
        md:grid-cols-3
        gap-4
        mb-8
        "
      >

        <select
          value={batch}
          onChange={(e) =>
            setBatch(
              e.target.value
            )
          }
          className="
          border
          p-3
          rounded-xl
          "
        >

          <option value="">
            All Batches
          </option>

          {batches.map((b) => (
            <option
              key={b}
              value={b}
            >
              {b}
            </option>
          ))}

        </select>

        <select
          value={branch}
          onChange={(e) =>
            setBranch(
              e.target.value
            )
          }
          className="
          border
          p-3
          rounded-xl
          "
        >

          <option value="">
            All Branches
          </option>

          {branches.map((b) => (
            <option
              key={b}
              value={b}
            >
              {b}
            </option>
          ))}

        </select>

        <select
          value={company}
          onChange={(e) =>
            setCompany(
              e.target.value
            )
          }
          className="
          border
          p-3
          rounded-xl
          "
        >

          <option value="">
            All Companies
          </option>

          {companies.map((c) => (
            <option
              key={c}
              value={c}
            >
              {c}
            </option>
          ))}

        </select>

      </div>

      {/* Loading */}

      {loading ? (

        <div
          className="
          text-center
          py-20
          "
        >
          Loading Alumni...
        </div>

      ) : (

        <>

          <div
            className="
            grid
            lg:grid-cols-3
            gap-6
            "
          >

            {paginatedAlumni.map(
              (alumni) => (

                <div
                  key={alumni.id}
                  className="
                  bg-white
                  rounded-3xl
                  shadow
                  overflow-hidden
                  "
                >

                  <img
                    src={
                      alumni.profileImage ||
                      "https://via.placeholder.com/400x300"
                    }
                    alt={
                      alumni.firstName
                    }
                    className="
                    w-full
                    h-56
                    object-cover
                    "
                  />

                  <div className="p-6">

                    <h3
                      className="
                      text-xl
                      font-bold
                      "
                    >
                      {alumni.firstName}
                      {" "}
                      {alumni.lastName}
                    </h3>

                    <p>
                      {alumni.branch}
                    </p>

                    <p>
                      {
                        alumni.graduationYear
                      }
                    </p>

                    <p>
                      {
                        alumni.company
                      }
                    </p>

                    <p>
                      {
                        alumni.location
                      }
                    </p>

                    <div
                      className="
                      flex
                      gap-3
                      mt-5
                      "
                    >

                      <Link
                        to={`/dashboard/alumni/${alumni.id}`}
                        className="
                        flex-1
                        bg-blue-600
                        text-white
                        py-2
                        rounded-xl
                        text-center
                        "
                      >
                        View Profile
                      </Link>

                      <button
                        onClick={() =>
                          handleConnect(
                            alumni
                          )
                        }
                        className="
                        flex-1
                        border
                        border-blue-600
                        text-blue-600
                        py-2
                        rounded-xl
                        "
                      >
                        Connect
                      </button>

                    </div>

                  </div>

                </div>

              )
            )}

          </div>

          {/* Pagination */}

          <div
            className="
            flex
            justify-center
            gap-2
            mt-10
            "
          >

            {[
              ...Array(totalPages)
            ].map((_, index) => (

              <button
                key={index}
                onClick={() =>
                  setCurrentPage(
                    index + 1
                  )
                }
                className={`
                  px-4 py-2 rounded-lg
                  ${
                    currentPage ===
                    index + 1
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200"
                  }
                `}
              >
                {index + 1}
              </button>

            ))}

          </div>

        </>

      )}

    </>
  );
};

export default Directory;