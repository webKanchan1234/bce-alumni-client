import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { getAllNews } from "../../api/newsApi";
import { errorToast } from "../../utils/toast";

const LatestNews = () => {

  const [news, setNews] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    loadLatestNews();
  }, []);

  const loadLatestNews =
    async () => {

      try {

        const response =
          await getAllNews();

        const latestNews =
          response.data
            ?.sort(
              (a, b) =>
                new Date(
                  b.createdAt ||
                  b.publishDate
                ) -
                new Date(
                  a.createdAt ||
                  a.publishDate
                )
            )
            .slice(0, 3);

        setNews(latestNews);

      } catch (error) {

        console.error(error);

        errorToast(
          "Failed to load news"
        );

      } finally {

        setLoading(false);
      }
    };

  return (

    <section className="py-24 bg-slate-50">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">

          <span className="text-blue-600 font-semibold">
            Latest Updates
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Latest News
          </h2>

        </div>

        {loading ? (

          <div className="text-center py-10">
            Loading news...
          </div>

        ) : news.length === 0 ? (

          <div className="text-center py-10 text-gray-500">
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
                shadow-lg
                overflow-hidden
                hover:-translate-y-2
                transition
                duration-300
                "
              >

                <img
                  src={
                    item.imageUrl ||
                    item.image
                  }
                  alt={item.title}
                  className="
                  h-60
                  w-full
                  object-cover
                  "
                />

                <div className="p-6">

                  <p className="text-blue-600 text-sm font-medium">

                    {item.category}

                  </p>

                  <h3
                    className="
                    text-2xl
                    font-bold
                    mt-3
                    line-clamp-2
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                    text-gray-500
                    mt-3
                    text-sm
                    "
                  >
                    {item.publishDate ||
                      item.createdAt}
                  </p>

                  <Link
                    to={`/news/${item.id}`}
                    className="
                    inline-block
                    mt-5
                    bg-blue-600
                    hover:bg-blue-700
                    text-white
                    px-5
                    py-2
                    rounded-xl
                    transition
                    "
                  >
                    Read More
                  </Link>

                </div>

              </div>

            ))}

          </div>

        )}

      </div>

    </section>

  );
};

export default LatestNews;