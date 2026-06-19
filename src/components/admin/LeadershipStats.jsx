const LeadershipStats = ({ leaders }) => {
  return (
    <div className="grid md:grid-cols-3 gap-6 mb-8">

      <div className="bg-white p-6 rounded-2xl shadow">
        <h3 className="text-gray-500">
          Total Leaders
        </h3>

        <p className="text-4xl font-bold mt-2">
          {leaders.length}
        </p>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow">
        <h3 className="text-gray-500">
          Executive Members
        </h3>

        <p className="text-4xl font-bold mt-2">
          {leaders.length}
        </p>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow">
        <h3 className="text-gray-500">
          Active Committee
        </h3>

        <p className="text-4xl font-bold mt-2">
          {leaders.length}
        </p>
      </div>

    </div>
  );
};

export default LeadershipStats;