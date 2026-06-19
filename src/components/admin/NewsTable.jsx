import { deleteNews } from "../../api/newsApi";

import {
  successToast,
  errorToast,
} from "../../utils/toast";

const NewsTable = ({
  news,
  refreshNews,
  onEdit,
}) => {

  const handleDelete =
    async (id) => {

      const confirmed =
        window.confirm(
          "Delete this news?"
        );

      if (!confirmed) return;

      try {

        await deleteNews(id);

        successToast(
          "News deleted successfully"
        );

        refreshNews();

      } catch (error) {

        console.error(error);

        errorToast(
          "Failed to delete news"
        );
      }
    };

  return (

    <div className="bg-white rounded-2xl shadow overflow-hidden">

      <table className="w-full">

        <thead className="bg-slate-100">

          <tr>
            <th className="p-4">
              Image
            </th>

            <th className="p-4 text-left">
              Title
            </th>

            <th className="p-4 text-left">
              Category
            </th>

            <th className="p-4 text-left">
              Actions
            </th>

          </tr>

        </thead>

        <tbody>

          {news.map((item) => (

            <tr
              key={item.id}
              className="border-t"
            >
              <td className="p-4">

                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="
    w-12
    h-12
    rounded-full
    object-cover
    "
                />

              </td>

              <td className="p-4">
                {item.title}
              </td>

              <td className="p-4">
                {item.category}
              </td>

              <td className="p-4">

                <div className="flex gap-4">

                  <button
                    onClick={() =>
                      onEdit(item)
                    }
                    className="text-blue-600"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() =>
                      handleDelete(item.id)
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

export default NewsTable;