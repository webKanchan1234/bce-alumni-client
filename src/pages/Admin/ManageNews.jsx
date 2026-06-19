import { useEffect, useState } from "react";

import NewsStats from "../../components/admin/NewsStats";
import NewsTable from "../../components/admin/NewsTable";
import NewsFormModal from "../../components/admin/NewsFormModal";

import { getAllNews } from "../../api/newsApi";

import {
  errorToast,
  successToast,
} from "../../utils/toast";

const ManageNews = () => {

  const [open, setOpen] =
    useState(false);

  const [news, setNews] =
    useState([]);

  const [loading, setLoading] =
    useState(true);
    const [selectedNews, setSelectedNews] =
  useState(null);

  const loadNews = async () => {

    try {

      const response =
        await getAllNews();

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

  useEffect(() => {
    loadNews();
  }, []);

  console.log("News data:", news);

  return (
    <div>

      <div
        className="
        flex
        justify-between
        items-center
        mb-8
        "
      >

        <h1
          className="
          text-4xl
          font-bold
          "
        >
          Manage News
        </h1>

        <button
  onClick={() => {

    setSelectedNews(null);

    setOpen(true);

  }}
  className="
  bg-blue-600
  text-white
  px-6
  py-3
  rounded-xl
  "
>
  + Create News
</button>

      </div>

      <NewsStats />

      {loading ? (

        <div
          className="
          bg-white
          rounded-2xl
          shadow
          p-10
          text-center
          "
        >
          Loading news...
        </div>

      ) : (

        <NewsTable
  news={news}
  refreshNews={loadNews}
  onEdit={(item) => {

    setSelectedNews(item);

    setOpen(true);

  }}
/>

      )}

      <NewsFormModal
  open={open}
  news={selectedNews}
  onClose={() => {

    setOpen(false);

    setSelectedNews(null);

  }}
  onSuccess={() => {

    loadNews();

    setOpen(false);

    setSelectedNews(null);

  }}
/>

    </div>
  );
};

export default ManageNews;