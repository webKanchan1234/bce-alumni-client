import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { getPublicAlumni } from "../../api/alumniApi";
import { errorToast } from "../../utils/toast";

const Alumni = () => {

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

  const filteredAlumni =
    alumni.filter((item) => {

      const fullName =
        `${item.firstName || ""} ${item.lastName || ""}`
          .toLowerCase();

      return (

        fullName.includes(
          search.toLowerCase()
        )

        &&

        (
          batch === "" ||
          String(item.graduationYear) === batch
        )

        &&

        (
          branch === "" ||
          item.branch === branch
        )

      );
    });

  const batches =
    [
      ...new Set(
        alumni.map(
          (a) =>
            a.graduationYear
        )
      ),
    ];

  const branches =
    [
      ...new Set(
        alumni.map(
          (a) =>
            a.branch
        )
      ),
    ];


    console.log(alumni);
    console.log(filteredAlumni);

  return (
    <div className="bg-slate-50 min-h-screen">

      {/* Hero */}

      <section className="bg-gradient-to-r from-blue-800 to-indigo-900 text-white py-24">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-6xl font-bold">
            BCE Alumni Directory
          </h1>

          <p className="mt-6 text-xl">
            Connect with BCE alumni across
            the globe.
          </p>

        </div>

      </section>

      {/* Filters */}

      <section className="max-w-7xl mx-auto px-6 py-12">

        <div className="bg-white rounded-3xl p-6 shadow">

          <div className="grid lg:grid-cols-3 gap-4">

            <input
              type="text"
              placeholder="Search Alumni..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              className="
              border
              rounded-xl
              p-4
              "
            />

            <select
              value={batch}
              onChange={(e) =>
                setBatch(e.target.value)
              }
              className="
              border
              rounded-xl
              p-4
              "
            >
              <option value="">
                All Batches
              </option>

              {batches.map((year) => (

                <option
                  key={year}
                  value={year}
                >
                  {year}
                </option>

              ))}

            </select>

            <select
              value={branch}
              onChange={(e) =>
                setBranch(e.target.value)
              }
              className="
              border
              rounded-xl
              p-4
              "
            >
              <option value="">
                All Branches
              </option>

              {branches.map((item) => (

                <option
                  key={item}
                  value={item}
                >
                  {item}
                </option>

              ))}

            </select>

          </div>

        </div>

      </section>

      {/* Alumni Grid */}

      <section className="max-w-7xl mx-auto px-6 pb-20">

        {loading ? (

          <div className="text-center py-20">
            Loading alumni...
          </div>

        ) : filteredAlumni.length === 0 ? (

          <div className="text-center py-20 text-gray-500">
            No alumni found
          </div>

        ) : (

          <div className="grid lg:grid-cols-3 gap-8">

            {filteredAlumni.map(
              (item) => (

                <div
                  key={item.id}
                  className="
                  bg-white
                  rounded-3xl
                  shadow
                  overflow-hidden
                  "
                >

                  <img
                    src={
                      item.profileImage ||
                      "https://i.pravatar.cc/400"
                    }
                    alt={item.firstName}
                    className="
                    w-full
                    h-60
                    object-cover
                    "
                  />

                  <div className="p-6">

                    <h3 className="text-2xl font-bold">

                      {item.firstName}
                      {" "}
                      {item.lastName}

                    </h3>

                    <p className="mt-2 text-gray-600">
                      {item.branch}
                    </p>

                    <p className="text-gray-600">
                      Batch:
                      {" "}
                      {item.graduationYear}
                    </p>

                    <p className="text-gray-600">
                      {item.company}
                    </p>

                    <p className="text-gray-600">
                      {item.designation}
                    </p>

                    <Link
                      to={`/alumni/${item.id}`}
                      className="
                      mt-5
                      inline-block
                      bg-blue-600
                      text-white
                      px-6
                      py-3
                      rounded-xl
                      "
                    >
                      View Profile
                    </Link>

                  </div>

                </div>

              )
            )}

          </div>

        )}

      </section>

    </div>
  );
};

export default Alumni;