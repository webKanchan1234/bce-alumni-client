const AlumniStats = ({
  alumni = [],
}) => {

  console.log(
    "PROPS =>",
    alumni
  );

  const totalAlumni =
    alumni.length;

  const approvedAlumni =
    alumni.filter(
      item => item.verified === true
    ).length;

  const pendingApproval =
    alumni.filter(
      item => item.verified !== true
    ).length;

  return (
    <div className="grid md:grid-cols-3 gap-6 mb-8">

      <div className="bg-white p-6 rounded-2xl shadow">
        <h3 className="text-gray-500">
          Total Alumni
        </h3>

        <p className="text-4xl font-bold mt-3 text-blue-700">
          {totalAlumni}
        </p>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow">
        <h3 className="text-gray-500">
          Approved Alumni
        </h3>

        <p className="text-4xl font-bold mt-3 text-green-700">
          {approvedAlumni}
        </p>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow">
        <h3 className="text-gray-500">
          Pending Approval
        </h3>

        <p className="text-4xl font-bold mt-3 text-yellow-700">
          {pendingApproval}
        </p>
      </div>

    </div>
  );
};

export default AlumniStats;