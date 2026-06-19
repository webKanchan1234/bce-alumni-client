const Pagination = ({
  currentPage,
  totalPages,
  setCurrentPage,
}) => {
  return (
    <div className="flex justify-center gap-3 mt-10">

      {Array.from(
        { length: totalPages },
        (_, index) => (
          <button
            key={index}
            onClick={() =>
              setCurrentPage(index + 1)
            }
            className={`
              px-4 py-2 rounded-xl
              ${
                currentPage === index + 1
                  ? "bg-blue-600 text-white"
                  : "bg-white"
              }
            `}
          >
            {index + 1}
          </button>
        )
      )}

    </div>
  );
};

export default Pagination;