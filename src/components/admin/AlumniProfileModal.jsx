const AlumniProfileModal = ({
  open,
  alumni,
  onClose,
}) => {
  if (!open || !alumni) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center">

      <div className="bg-white p-8 rounded-2xl w-full max-w-xl">

        <h2 className="text-3xl font-bold mb-4">
          Alumni Details
        </h2>

        <div className="space-y-3">

  <p>
    <strong>Name:</strong>{" "}
    {alumni.firstName} {alumni.lastName}
  </p>

  <p>
    <strong>Email:</strong>{" "}
    {alumni.email}
  </p>

  <p>
    <strong>Batch:</strong>{" "}
    {alumni.graduationYear}
  </p>

  <p>
    <strong>Branch:</strong>{" "}
    {alumni.branch}
  </p>

  <p>
    <strong>Company:</strong>{" "}
    {alumni.company}
  </p>

  <p>
    <strong>Designation:</strong>{" "}
    {alumni.designation}
  </p>

  <p>
    <strong>Location:</strong>{" "}
    {alumni.location}
  </p>

</div>

        <button
          onClick={onClose}
          className="
          mt-6
          bg-blue-600
          text-white
          px-6
          py-3
          rounded-xl
          "
        >
          Close
        </button>

      </div>

    </div>
  );
};

export default AlumniProfileModal;