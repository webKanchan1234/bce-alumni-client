import api from "./axios";

export const getEvents = () =>
  api.get("/events");

export const getEventById = (id) =>
  api.get(`/events/${id}`);

export const registerEvent = (id) =>
  api.post(`/events/${id}/register`);


export const createEvent = (data) =>
  api.post("/admin/events", data);

export const updateEvent = (id, data) =>
  api.put(`/admin/events/${id}`, data);

export const deleteEvent = (id) =>
  api.delete(`/admin/events/${id}`);


