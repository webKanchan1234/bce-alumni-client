import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import { getNewsById } from "../../api/newsApi";
import { errorToast } from "../../utils/toast";

const NewsDetails = () => {

  const { id } = useParams();

  const [news, setNews] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    const fetchNews =
      async () => {

        try {

          const response =
            await getNewsById(id);

          setNews(
            response.data
          );

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

  }, [id]);

  if (loading) {
    return (
      <div className="text-center py-20">
        Loading article...
      </div>
    );
  }

  if (!news) {
    return (
      <div className="text-center py-20">
        News article not found
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen">

      {/* Hero Image */}

      <div className="relative">

        <img
          src={
            news.imageUrl ||
            "https://images.unsplash.com/photo-1504711434969-e33886168f5c"
          }
          alt={news.title}
          className="
          w-full
          h-[450px]
          object-cover
          "
        />

        <div
          className="
          absolute
          inset-0
          bg-black/40
          flex
          items-end
          "
        >
          <div className="max-w-6xl mx-auto px-6 pb-10 text-white">

            <span
              className="
              bg-blue-600
              px-4
              py-2
              rounded-full
              text-sm
              "
            >
              {news.category}
            </span>

            <h1
              className="
              text-5xl
              font-bold
              mt-4
              "
            >
              {news.title}
            </h1>

            <p className="mt-4 text-lg">

              {new Date(
                news.createdAt
              ).toLocaleDateString()}

            </p>

          </div>
        </div>

      </div>

      {/* Content */}

      <div className="max-w-5xl mx-auto px-6 py-16">

        <div
          className="
          bg-white
          rounded-3xl
          shadow
          p-8
          "
        >

          <h2 className="text-2xl font-bold mb-6">
            Article Details
          </h2>

          <p
            className="
            text-gray-700
            leading-9
            whitespace-pre-line
            "
          >
            {news.content}
          </p>

        </div>

        <div className="mt-10">

          <Link
            to="/news"
            className="
            bg-blue-600
            text-white
            px-6
            py-3
            rounded-xl
            hover:bg-blue-700
            "
          >
            ← Back To News
          </Link>

        </div>

      </div>

    </div>
  );
};

export default NewsDetails;