const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const submitButton = document.querySelector('#submit-button');

const errorMessage = document.querySelector(".msg");

const items = document.querySelector('.items');

submitButton.addEventListener('click', (e) => {
    e.preventDefault();

    const nameValue = nameInput.value;
    const emailValue = emailInput.value;

    if (nameValue === "" || emailValue === "") {
        errorMessage.textContent = "Please, fill out the fields!";
        errorMessage.classList = "error";

        setTimeout(() => {
            errorMessage.textContent = "";
            errorMessage.classList = "";
        }, 3000);

        return;
    }

    const li = document.createElement("li");
    li.classList = "item";
    li.innerHTML = `<h3> You're Welcome! </h3> </br> Name: ${nameValue} </br> E-mail: ${emailValue}`;

    items.appendChild(li);

    nameInput.value = '';
    emailInput.value = '';
})