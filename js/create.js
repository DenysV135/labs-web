const createForm = document.getElementById('createForm');
const nameInput = document.getElementById('nameInput');
const valueInput = document.getElementById('valueInput');
const errorModal = document.getElementById('errorModal');
const modalMessage = document.getElementById('modalMessage');
const closeModalBtn = document.getElementById('closeModalBtn');

function showError(message) {
    modalMessage.textContent = message;
    errorModal.style.display = 'flex';
}

closeModalBtn.addEventListener('click', function () {
    errorModal.style.display = 'none';
});

createForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const nameValue = nameInput.value.trim();
    const numberValue = Number(valueInput.value);

    if (nameValue === '') {
        showError("Будь ласка, введіть назву лічильника.");
        return;
    }

    if (valueInput.value === '' || numberValue < 0 || isNaN(numberValue)) {
        showError("Показник має бути додатним числом.");
        return;
    }

    alert(`Лічильник "${nameValue}" успішно провалідовано!`);

    createForm.reset();
});