const form = document.querySelector("#eventForm");
const eventType = document.querySelector("#eventType");
const iNumContainer = document.querySelector("#iNumContainer")
const eventCodeContainer = document.querySelector("#eventCodeContainer")
const output = document.querySelector("#output");

function updateBonusField() {
    const value = eventType.value;

    if (value == "") {
        iNumContainer.setAttribute("hidden", "");
        eventCodeContainer.setAttribute("hidden", "")
    }
    if (value == "student") {
        iNumContainer.removeAttribute("hidden");
        eventCodeContainer.setAttribute("hidden", "")
    }
    if (value == "guest") {
        iNumContainer.setAttribute("hidden", "");
        eventCodeContainer.removeAttribute("hidden")
    }
}

eventType.addEventListener("change", updateBonusField);
updateBonusField;

function isPastDate(value) {
  const today = new Date();
  const chosen = new Date(value);
  return chosen < today;
}

function getStudentNumber(){
    const studentNumber = iNumContainer.querySelector("input").value;
    return studentNumber;
}

function getEventCodeInput(){
    const eventCodeInput = eventCodeContainer.querySelector("input").value;
    return eventCodeInput;
}

form.addEventListener("submit", function (event) {
  // stops values from being put in URL
  // stops page from reloading
  event.preventDefault();
  output.textContent = "";

  const firstName = form.firstName.value.trim();
  const lastName = form.lastName.value.trim();
  const email = form.email.value.trim();
  const type = form.eventType.value;
  const eventDate = form.eventDate.value;
  const studentNumber = getStudentNumber();
  const eventCodeInput = getEventCodeInput();

  if (isPastDate(eventDate)) {
    output.textContent = "Please choose a later date.";
    return;
  }

  if (studentNumber.length > 0 && studentNumber.length != 9) {
    output.textContent = "Student I# must be 9 digits";
    return;
  }

  if (eventCodeInput > 0 && eventCodeInput != "EVENT131") {
    output.textContent = "Invalid Event Code"
    return;
  }

  output.innerHTML = `
  <h2>Ticket Created</h2>
  <p>${firstName} ${lastName}</p>
  <p>${type}</p>
  <p>${eventDate}</p>
  `;

  form.reset();
});