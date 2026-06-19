const JobTable = ({
  jobs,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="bg-white rounded-2xl shadow overflow-hidden">

      <table className="w-full">

        <thead className="bg-slate-100">

          <tr>
            <th className="p-4 text-left">
              Company
            </th>

            <th className="p-4 text-left">
              Position
            </th>

            <th className="p-4 text-left">
              Location
            </th>

            <th className="p-4 text-left">
              Experience
            </th>

            <th className="p-4 text-left">
              Salary
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

          {jobs.map((job) => (

            <tr
              key={job.id}
              className="border-t"
            >

              <td className="p-4">
                {job.company}
              </td>

              <td className="p-4">
                {job.title}
              </td>

              <td className="p-4">
                {job.location}
              </td>

              <td className="p-4">
                {job.experience}
              </td>

              <td className="p-4">
                {job.salary}
              </td>

              <td className="p-4">

                <span
                  className={
                    job.active
                      ? "text-green-600 font-medium"
                      : "text-red-600 font-medium"
                  }
                >
                  {job.active
                    ? "Active"
                    : "Inactive"}
                </span>

              </td>

              <td className="p-4">

                <div className="flex gap-4">

                  <button
                    onClick={() =>
                      onEdit(job)
                    }
                    className="text-blue-600"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() =>
                      onDelete(job.id)
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

export default JobTable;