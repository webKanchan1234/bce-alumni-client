import api from "./axios";

export const getAllNews = () =>
  api.get("/news");

export const getNewsById = (id) =>
  api.get(`/news/${id}`);

export const createNews = (data) =>
  api.post("/admin/news", data);

export const updateNews = (
  id,
  data
) =>
  api.put(
    `/admin/news/${id}`,
    data
  );

export const deleteNews = (id) =>
  api.delete(
    `/admin/news/${id}`
  );