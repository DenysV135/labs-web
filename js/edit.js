const nameInput = document.getElementById('nameInput');
const valueInput = document.getElementById('valueInput');
const urlParams = new URLSearchParams(window.location.search);
const currentName = urlParams.get('name');
const currentValue = urlParams.get('value');

if (currentName !== null) {
    nameInput.value = currentName;
}
if (currentValue !== null) {
    valueInput.value = currentValue;
}

function showError(message) {
    modalMessage.textContent = message;
    errorModal.style.display = 'flex';
}

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
