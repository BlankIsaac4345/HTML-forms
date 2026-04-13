console.log("Jarvis Activated");

function processForm(event) {
    console.log("click");

    event.preventDefault();

    let fNameInput = document.getElementById("firstname")
    console.log(fNameInput.value)

    let dateInput = document.getElementById("birthdate")
    let birthdate = dateInput.value;

    console.log(birthdate)
}