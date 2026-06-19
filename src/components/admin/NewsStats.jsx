import { useEffect, useState } from "react";

import { getAllNews } from "../../api/newsApi";

import { errorToast } from "../../utils/toast";

const NewsStats = () => {

  const [stats, setStats] =
    useState({
      totalNews: 0,
      published: 0,
      drafts: 0,
    });

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    const loadStats = async () => {

      try {

        const response =
          await getAllNews();

        const news =
          response.data || [];

        const published =
          news.filter(
            (item) =>
              item.status ===
              "PUBLISHED"
          ).length;

        const drafts =
          news.filter(
            (item) =>
              item.status ===
              "DRAFT"
          ).length;

        setStats({
          totalNews:
            news.length,
          published,
          drafts,
        });

      } catch (error) {

        console.error(error);

        errorToast(
          "Failed to load news statistics"
        );

      } finally {

        setLoading(false);
      }
    };

    loadStats();

  }, []);

  const cards = [
    {
      title: "Total News",
      value: stats.totalNews,
    },
    {
      title: "Published",
      value: stats.published,
    },
    {
      title: "Drafts",
      value: stats.drafts,
    },
  ];

  if (loading) {

    return (
      <div className="grid md:grid-cols-3 gap-6 mb-8">

        {[1, 2, 3].map((item) => (

          <div
            key={item}
            className="
            bg-white
            rounded-2xl
            shadow
            p-6
            animate-pulse
            h-32
            "
          />

        ))}

      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-3 gap-6 mb-8">

      {cards.map((item) => (

        <div
          key={item.title}
          className="
          bg-white
          rounded-2xl
          shadow
          p-6
          hover:shadow-lg
          transition
          "
        >

          <h3 className="text-gray-500">
            {item.title}
          </h3>

          <p
            className="
            text-4xl
            font-bold
            mt-2
            text-blue-700
            "
          >
            {item.value}
          </p>

        </div>

      ))}

    </div>
  );
};

export default NewsStats;