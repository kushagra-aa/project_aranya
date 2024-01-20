// Constants
const API_URL =
  "https://api.propacity.in/api/v1/webhooks/integration/61cf0d44-1ede-4dfa-b3ce-930072581261/insertLead";
// const GOOGLE_SHEET_URL = "https://docs.google.com/spreadsheets/d/1Xth0MBhPyzDJaDH22tpVncHXAd822hv-z2OQUwhTDgU/";
const GOOGLE_SHEETS_APP_URL =
  "https://script.google.com/macros/s/AKfycbzQUD7Xn-pXAy2p1INDCZnDY3CXwOfJ97abDNgSfqCYt6dseW6KUoJFHeRNTnzLRTtZ2g/exec";

// Element
const formElm = document.getElementById("contactFrom");

// API Functions
async function makeAPIRequest(body) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  console.log("Response:", response);

  return response;
}
async function makeSheetsAPIRequest(body) {
  var formData = new FormData(body);
  const response = await fetch(GOOGLE_SHEETS_APP_URL, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  console.log("Response:", response);

  return response;
}

// Event Handler
async function submitHandler(event) {
  event.preventDefault(); // Prevent default form submission
  let bodyData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    mobile: document.getElementById("mobile").value,
  };
  console.log("bodyData :>> ", bodyData);
  try {
    await makeAPIRequest(bodyData);
    await makeSheetsAPIRequest(this);
    alert("Successfully Inserted Lead");
  } catch (error) {
    console.error("Error:", error);
  }
}

// Event Listener
formElm.addEventListener("submit", submitHandler);
