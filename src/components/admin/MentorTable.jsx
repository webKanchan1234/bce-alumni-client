const MentorTable = ({
  mentors,
  onEdit,
  onDelete,
}) => {

  return (

    <div className="bg-white rounded-2xl shadow overflow-hidden">

      <table className="w-full">

        <thead className="bg-slate-100">

          <tr>

            <th className="p-4 text-left">
              Name
            </th>

            <th className="p-4 text-left">
              Company
            </th>

            <th className="p-4 text-left">
              Designation
            </th>

            <th className="p-4 text-left">
              Experience
            </th>

            <th className="p-4 text-left">
              Status
            </th>

            <th className="p-4 text-left">
              Actions
            </th>

          </tr>

        </thead>

        <tbody>

          {mentors.map((mentor) => (

            <tr
              key={mentor.id}
              className="border-t"
            >

              <td className="p-4">
                {mentor.name}
              </td>

              <td className="p-4">
                {mentor.company}
              </td>

              <td className="p-4">
                {mentor.designation}
              </td>

              <td className="p-4">
                {mentor.experienceYears} Years
              </td>

              <td className="p-4">

                <span
                  className={
                    mentor.available
                      ? "text-green-600"
                      : "text-red-600"
                  }
                >
                  {mentor.available
                    ? "Available"
                    : "Unavailable"}
                </span>

              </td>

              <td className="p-4">

                <div className="flex gap-4">

                  <button
                    onClick={() =>
                      onEdit(mentor)
                    }
                    className="text-blue-600"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() =>
                      onDelete(
                        mentor.id
                      )
                    }
                    className="text-red-600"
                  >
                    Delete
                  </button>

                </div>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );
};

export default MentorTable;