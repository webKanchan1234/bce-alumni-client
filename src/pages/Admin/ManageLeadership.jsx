import { useEffect, useState } from "react";

import LeadershipStats from "../../components/admin/LeadershipStats";
import LeadershipTable from "../../components/admin/LeadershipTable";
import LeadershipFormModal from "../../components/admin/LeadershipFormModal";

import {
  getLeadership,
  deleteLeadership,
} from "../../api/leadershipApi";

import {
  successToast,
  errorToast,
} from "../../utils/toast";

const ManageLeadership = () => {

  const [leaders, setLeaders] =
    useState([]);

  const [open, setOpen] =
    useState(false);

  const [selectedLeader,
    setSelectedLeader] =
    useState(null);

  const loadLeadership =
    async () => {

      try {

        const response =
          await getLeadership();

        setLeaders(
          response.data
        );

      } catch (error) {

        console.error(error);

        errorToast(
          "Failed to load leaders"
        );
      }
    };

  useEffect(() => {
    loadLeadership();
  }, []);

  const handleDelete =
    async (id) => {

      const confirmed =
        window.confirm(
          "Delete this leader?"
        );

      if (!confirmed) return;

      try {

        await deleteLeadership(id);

        successToast(
          "Leader deleted successfully"
        );

        loadLeadership();

      } catch (error) {

        console.error(error);

        errorToast(
          "Delete failed"
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
          Manage Leadership
        </h1>

        <button
          onClick={() => {

            setSelectedLeader(
              null
            );

            setOpen(true);

          }}
          className="
          bg-blue-600
          text-white
          px-6
          py-3
          rounded-xl
          hover:bg-blue-700
          "
        >
          + Add Leader
        </button>

      </div>

      <LeadershipStats
        leaders={leaders}
      />

      <LeadershipTable
        leaders={leaders}
        onEdit={(leader) => {

          setSelectedLeader(
            leader
          );

          setOpen(true);

        }}
        onDelete={handleDelete}
      />

      <LeadershipFormModal
        open={open}
        leader={selectedLeader}
        onClose={() => {

          setOpen(false);

          setSelectedLeader(
            null
          );

        }}
        onSuccess={() => {

          loadLeadership();

          setOpen(false);

          setSelectedLeader(
            null
          );

        }}
      />

    </div>

  );
};

export default ManageLeadership;