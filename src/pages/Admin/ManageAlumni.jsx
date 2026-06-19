import { useEffect, useState } from "react";

import AlumniStats from "../../components/admin/AlumniStats";
import AlumniTable from "../../components/admin/AlumniTable";
import AlumniProfileModal from "../../components/admin/AlumniProfileModal";

import { getAdminAlumni } from "../../api/alumniApi";

import { errorToast } from "../../utils/toast";

const ManageAlumni = () => {

  const [selected, setSelected] =
    useState(null);

  const [alumni, setAlumni] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const loadAlumni = async () => {

    try {

      const response =
        await getAdminAlumni();

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

  console.log("ALUMNI =>", alumni);

  useEffect(() => {
    loadAlumni();
  }, []);

  console.log(alumni);

  return (
    <div>

      <h1 className="text-4xl font-bold mb-8">
        Manage Alumni
      </h1>

      <AlumniStats
        alumni={alumni}
       />

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
          Loading alumni...
        </div>

      ) : (

        <AlumniTable
          alumni={alumni}
          onView={setSelected}
          refreshAlumni={loadAlumni}
        />

      )}

      <AlumniProfileModal
        open={!!selected}
        alumni={selected}
        onClose={() =>
          setSelected(null)
        }
      />

    </div>
  );
};

export default ManageAlumni;