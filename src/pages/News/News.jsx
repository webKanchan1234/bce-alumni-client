import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { getAllNews } from "../../api/newsApi";
import { errorToast } from "../../utils/toast";

const News = () => {

  const [news, setNews] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    const fetchNews =
      async () => {

        try {

          const response =
            await getAllNews();

          setNews(response.data);

        } catch (error) {

          console.error(error);

          errorToast(
            "Failed to load news"
          );

        } finally {

          setLoading(false);
        }
      };

    fetchNews();

  }, []);

  return (
    <div className="min-h-screen bg-slate-50">

      {/* Hero */}

      <section className="bg-gradient-to-r from-blue-800 to-indigo-900 text-white py-24">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-6xl font-bold">
            BCE News & Updates
          </h1>

          <p className="mt-6 text-xl">
            Stay updated with alumni achievements,
            campus events and community news.
          </p>

        </div>

      </section>

      {/* News Grid */}

      <section className="max-w-7xl mx-auto px-6 py-20">

        {loading ? (

          <div className="text-center py-20">
            Loading news...
          </div>

        ) : news.length === 0 ? (

          <div className="text-center py-20 text-gray-500">
            No news available
          </div>

        ) : (

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {news.map((item) => (

              <div
                key={item.id}
                className="
                bg-white
                rounded-3xl
                shadow
                overflow-hidden
                hover:shadow-xl
                transition
                "
              >

                <img
                  src={
                    item.imageUrl ||
                    "https://images.unsplash.com/photo-1504711434969-e33886168f5c"
                  }
                  alt={item.title}
                  className="
                  w-full
                  h-56
                  object-cover
                  "
                />

                <div className="p-6">

                  <span
                    className="
                    text-sm
                    text-blue-600
                    font-semibold
                    "
                  >
                    {item.category}
                  </span>

                  <h2
                    className="
                    text-2xl
                    font-bold
                    mt-2
                    line-clamp-2
                    "
                  >
                    {item.title}
                  </h2>

                  <p
                    className="
                    mt-3
                    text-gray-600
                    line-clamp-3
                    "
                  >
                    {item.summary}
                  </p>

                  <p className="mt-4 text-sm text-gray-500">
  {item.publishedAt
    ? new Date(
        item.publishedAt
      ).toLocaleDateString()
    : "No Date"}
</p>

                  <Link
                    to={`/news/${item.id}`}
                    className="
                    inline-block
                    mt-5
                    bg-blue-600
                    text-white
                    px-5
                    py-2
                    rounded-xl
                    hover:bg-blue-700
                    "
                  >
                    Read More
                  </Link>

                </div>

              </div>

            ))}

          </div>

        )}

      </section>

    </div>
  );
};

export default News;