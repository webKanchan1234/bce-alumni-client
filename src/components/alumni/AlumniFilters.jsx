const AlumniFilters = ({
  batch,
  setBatch,
  branch,
  setBranch,
  company,
  setCompany,
}) => {
  return (
    <div className="grid md:grid-cols-3 gap-4">

      <select
        value={batch}
        onChange={(e) => setBatch(e.target.value)}
        className="border p-3 rounded-xl"
      >
        <option value="">All Batch</option>
        <option value="2019">2019</option>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
      </select>

      <select
        value={branch}
        onChange={(e) => setBranch(e.target.value)}
        className="border p-3 rounded-xl"
      >
        <option value="">All Branch</option>
        <option value="CSE">CSE</option>
        <option value="ECE">ECE</option>
        <option value="ME">ME</option>
      </select>

      <select
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        className="border p-3 rounded-xl"
      >
        <option value="">All Company</option>
        <option value="Google">Google</option>
        <option value="Microsoft">Microsoft</option>
        <option value="Amazon">Amazon</option>
      </select>

    </div>
  );
};

export default AlumniFilters;