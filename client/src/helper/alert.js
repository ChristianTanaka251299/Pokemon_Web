import Swal from "sweetalert2";

function successAlert(message = "") {
  Swal.fire({
    icon: "success",
    title: message,
    showConfirmButton: false,
    timer: 1500,
  });
}

function errorAlertWithMessage(message = "") {
  Swal.fire({
      icon: "error",
      title: message,
      showConfirmButton: false,
      timer: 1500
  })
}

export { successAlert, errorAlertWithMessage };
