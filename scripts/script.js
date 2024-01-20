// Constants
const API_URL =
  "https://api.propacity.in/api/v1/webhooks/integration/61cf0d44-1ede-4dfa-b3ce-930072581261/insertLead";

//   Element
const formElm = document.getElementById("contactFrom");

// Event Handler

function submitHandler(event) {
  event.preventDefault(); // Prevent default form submission
  let formData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    mobile: document.getElementById("mobile").value,
  };
  console.log("formData :>> ", formData);
}

// Event Listener
formElm.addEventListener("submit", submitHandler);
