const AlumniSearch = ({ search, setSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search by name, company..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="
      w-full
      lg:w-96
      p-3
      border
      rounded-xl
      bg-white
      "
    />
  );
};

export default AlumniSearch;