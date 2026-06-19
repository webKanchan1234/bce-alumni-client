import { useEffect, useState } from "react";

import MentorStats from "../../components/admin/MentorStats";
import MentorTable from "../../components/admin/MentorTable";
import MentorFormModal from "../../components/admin/MentorFormModal";

import {
  getMentors,
  deleteMentor,
} from "../../api/mentorApi";

import {
  successToast,
  errorToast,
} from "../../utils/toast";

const ManageMentors = () => {

  const [open, setOpen] =
    useState(false);

  const [selectedMentor, setSelectedMentor] =
    useState(null);

  const [mentors, setMentors] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const loadMentors = async () => {

    try {

      const response =
        await getMentors();

      setMentors(response.data);

    } catch (error) {

      errorToast(
        "Failed to load mentors"
      );

    } finally {

      setLoading(false);
    }
  };

  useEffect(() => {
    loadMentors();
  }, []);

  const handleDelete =
    async (id) => {

      const confirmed =
        window.confirm(
          "Delete this mentor?"
        );

      if (!confirmed) return;

      try {

        await deleteMentor(id);

        successToast(
          "Mentor deleted successfully"
        );

        loadMentors();

      } catch {

        errorToast(
          "Failed to delete mentor"
        );
      }
    };

    console.log(mentors)

  return (

    <div>

      <div className="flex justify-between items-center mb-8">

        <h1 className="text-4xl font-bold">
          Manage Mentors
        </h1>

        <button
          onClick={() => {

            setSelectedMentor(null);

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
          + Add Mentor
        </button>

      </div>

      <MentorStats />

      {loading ? (

        <div className="bg-white rounded-2xl shadow p-10 text-center">
          Loading mentors...
        </div>

      ) : (

        <MentorTable
          mentors={mentors}
          onEdit={(mentor) => {

            setSelectedMentor(
              mentor
            );

            setOpen(true);

          }}
          onDelete={handleDelete}
        />

      )}

      <MentorFormModal
        open={open}
        mentor={selectedMentor}
        onClose={() => {

          setOpen(false);

          setSelectedMentor(null);

        }}
        onSuccess={() => {

          loadMentors();

          setOpen(false);

          setSelectedMentor(null);

        }}
      />

    </div>

  );
};

export default ManageMentors;