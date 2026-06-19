import { useEffect, useState } from "react";

import NewsCard from "./NewsCard";

import { getAllNews } from "../../api/newsApi";

import { errorToast } from "../../utils/toast";

const HomepageNews = () => {

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
            ?.slice(0, 3);

        setNews(
          latestNews || []
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

  return (

    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div
          className="
          flex
          justify-between
          items-center
          mb-12
          "
        >

          <div>

            <p
              className="
              text-blue-600
              font-semibold
              "
            >
              Latest Updates
            </p>

            <h2
              className="
              text-4xl
              md:text-5xl
              font-bold
              mt-2
              "
            >
              Alumni News
            </h2>

          </div>

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

          <div
            className="
            grid
            md:grid-cols-2
            lg:grid-cols-3
            gap-8
            "
          >

            {news.map((item) => (

              <NewsCard
                key={item.id}
                news={item}
              />

            ))}

          </div>

        )}

      </div>

    </section>
  );
};

export default HomepageNews;