import api from "./axios";

export const getMentors = () =>
  api.get("/mentors");

export const getMentorById = (id) =>
  api.get(`/mentors/${id}`);

export const createMentor = (data) =>
  api.post("/admin/mentors", data);

export const updateMentor = (id, data) =>
  api.put(`/admin/mentors/${id}`, data);

export const deleteMentor = (id) =>
  api.delete(`/admin/mentors/${id}`);

export const approveMentor = (id) =>
  api.put(`/admin/mentors/${id}/approve`);

export const rejectMentor = (id) =>
  api.put(`/admin/mentors/${id}/reject`);

export const requestMentorship = (id) =>
  api.post(`/mentors/${id}/request`);

