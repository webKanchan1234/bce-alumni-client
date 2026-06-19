import {
  toggleAlumniStatus,
} from "../../api/alumniApi";

import {
  successToast,
  errorToast,
} from "../../utils/toast";

const AlumniTable = ({
  alumni,
  onView,
  refreshAlumni,
}) => {

  const handleToggle =
    async (id) => {

      try {

        await toggleAlumniStatus(
          id
        );

        successToast(
          "Status updated"
        );

        refreshAlumni();

      } catch (error) {

        console.error(error);

        errorToast(
          "Failed to update status"
        );
      }
    };

  return (
    <div className="bg-white rounded-2xl shadow overflow-hidden">

      <table className="w-full">

        <thead className="bg-slate-100">

          <tr>

            <th className="p-4 text-left">
              Name
            </th>

            <th className="p-4 text-left">
              Batch
            </th>

            <th className="p-4 text-left">
              Company
            </th>

            <th className="p-4 text-left">
              Status
            </th>

            <th className="p-4 text-left">
              Action
            </th>

          </tr>

        </thead>

        <tbody>

          {alumni.map((item) => (

            <tr
              key={item.id}
              className="border-t"
            >

              <td className="p-4">
                {item.firstName}
                {" "}
                {item.lastName}
              </td>

              <td className="p-4">
                {item.graduationYear}
              </td>

              <td className="p-4">
                {item.company || "-"}
              </td>

              <td className="p-4">

                {item.verified ? (

                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">
                    Approved
                  </span>

                ) : (

                  <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full">
                    Pending
                  </span>

                )}

              </td>

              <td className="p-4 flex gap-3">

                <button
                  onClick={() =>
                    handleToggle(
                      item.id
                    )
                  }
                  className={
                    item.verified
                      ? `
                      bg-red-600
                      text-white
                      px-4
                      py-2
                      rounded-lg
                      `
                      : `
                      bg-green-600
                      text-white
                      px-4
                      py-2
                      rounded-lg
                      `
                  }
                >

                  {item.verified
                    ? "Deactivate"
                    : "Approve"}

                </button>

                <button
                  onClick={() =>
                    onView(item)
                  }
                  className="
                  text-blue-600
                  font-medium
                  "
                >
                  View
                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
};

export default AlumniTable;