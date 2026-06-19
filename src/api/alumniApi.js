import api from "./axios";


export const getPublicAlumni = () =>
  api.get("/alumni/public");

export const getAlumniById = (id) =>
  api.get(`/alumni/${id}`);

export const toggleAlumniStatus = (
  id
) =>
  api.put(
    `/admin/alumni/${id}/toggle-status`
  );

export const getAdminAlumni = () =>
  api.get("/admin/alumni");



// export const getAlumniById = (id) =>
//   api.get(`/alumni/${id}`);

// export const approveAlumni = (id) =>
//   api.put(
//     `/admin/alumni/${id}/approve`
//   );

// export const deactivateAlumni = (id) =>
//   api.put(
//     `/admin/alumni/${id}/deactivate`
//   );

// export const deleteAlumni = (id) =>
//   api.delete(
//     `/admin/alumni/${id}`
//   );

//   export const getAlumni = () =>
//   api.get("/alumni");

// export const getPublicAlumni = () =>
//   api.get("/alumni/public");
