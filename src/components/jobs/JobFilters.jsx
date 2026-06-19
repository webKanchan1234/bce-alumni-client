const JobFilters = ({
  location,
  setLocation,
}) => {
  return (
    <select
      value={location}
      onChange={(e) =>
        setLocation(e.target.value)
      }
      className="
      border
      rounded-xl
      p-3
      "
    >
      <option value="">
        All Locations
      </option>

      <option value="Bangalore">
        Bangalore
      </option>

      <option value="Hyderabad">
        Hyderabad
      </option>

      <option value="Pune">
        Pune
      </option>

    </select>
  );
};

export default JobFilters;