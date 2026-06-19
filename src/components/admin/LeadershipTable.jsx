const LeadershipTable = ({
  leaders,
  onEdit,
  onDelete,
}) => {

  return (

    <div className="bg-white rounded-2xl shadow overflow-hidden">

      <table className="w-full">

        <thead className="bg-slate-100">

          <tr>

            <th className="p-4">
              Photo
            </th>

            <th className="p-4 text-left">
              Name
            </th>

            <th className="p-4 text-left">
              Role
            </th>

            <th className="p-4 text-left">
              Company
            </th>

            <th className="p-4 text-left">
              Actions
            </th>

          </tr>

        </thead>

        <tbody>

          {leaders.map((leader) => (

            <tr
              key={leader.id}
              className="border-t"
            >

              <td className="p-4">

                <img
                  src={
                    leader.image ||
                    "https://i.pravatar.cc/100"
                  }
                  alt={leader.name}
                  className="
                  w-12
                  h-12
                  rounded-full
                  object-cover
                  "
                />

              </td>

              <td className="p-4">
                {leader.name}
              </td>

              <td className="p-4">
                {leader.role}
              </td>

              <td className="p-4">
                {leader.company}
              </td>

              <td className="p-4">

                <div className="flex gap-4">

                  <button
                    onClick={() =>
                      onEdit(leader)
                    }
                    className="
                    text-blue-600
                    font-medium
                    "
                  >
                    Edit
                  </button>

                  <button
                    onClick={() =>
                      onDelete(
                        leader.id
                      )
                    }
                    className="
                    text-red-600
                    font-medium
                    "
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

export default LeadershipTable;