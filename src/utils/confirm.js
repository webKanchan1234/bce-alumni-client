import Swal from "sweetalert2";

export const confirmDelete = async () => {

  const result = await Swal.fire({
    title: "Delete?",
    text: "This action cannot be undone",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Delete",
  });

  return result.isConfirmed;
};