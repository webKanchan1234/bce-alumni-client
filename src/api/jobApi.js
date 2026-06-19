import api from "./axios";

export const getJobs = () =>
  api.get("/jobs");

export const getJobById = (id) =>
  api.get(`/jobs/${id}`);

export const createJob = (data) =>
  api.post("/admin/jobs", data);

export const updateJob = (id, data) =>
  api.put(`/admin/jobs/${id}`, data);

export const deleteJob = (id) =>
  api.delete(`/admin/jobs/${id}`);

export const applyJob = (id) =>
  api.post(`/jobs/${id}/apply`);

export const requestReferral = (id) =>
  api.post(`/jobs/${id}/referral`);