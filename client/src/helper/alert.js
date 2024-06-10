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

function warningAlertWithConfirmation() {
  return Swal.fire({
    title: "Do you want to remove your friend?",
    showDenyButton: true,
    confirmButtonText: "Yes",
    denyButtonText: "No",
  }).then((result) => {
    return result.isConfirmed;
  });
}


export { successAlert, errorAlertWithMessage, warningAlertWithConfirmation };
