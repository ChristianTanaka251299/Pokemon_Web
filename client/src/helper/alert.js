import Swal from "sweetalert2";

function successAlert(message = "") {
  Swal.fire({
    icon: "success",
    title: message,
    showConfirmButton: false,
    timer: 1500,
  });
}

export { successAlert };
