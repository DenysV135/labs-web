const urlmain = "http://127.0.0.1:8000";
const form = document.getElementById("createForm");
const modal = document.getElementById("errorModal");
const modalMessage = document.getElementById("modalMessage");
const closeModalBtn = document.getElementById("closeModalBtn");

if (closeModalBtn && modal) {
    closeModalBtn.addEventListener("click", function() {
        modal.style.display = "none";
    });
}

form.addEventListener("submit", async function(event) {
    event.preventDefault(); 

    const nameVal = document.getElementById("nameInput").value.trim();
    const valueVal = document.getElementById("valueInput").value;
    const statusCheckbox = document.getElementById("statusCheckbox"); 

    if (nameVal === "" || valueVal === "" || parseFloat(valueVal) < 0) {
        if (modal && modalMessage) {
            modalMessage.textContent = "Будь ласка, введіть коректну назву та показник (не менше 0).";
            modal.style.display = "flex";
        } else {
            alert("Помилка: перевірте правильність даних.");
        }
        return; 
    }

    const newItem = {
        id: Date.now(), 
        name: nameVal,
        value: parseFloat(valueVal),
        isWorking: statusCheckbox ? statusCheckbox.checked : true 
    };

    try {
        await fetch(`${urlmain}/api/items`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newItem)
        });
        
        window.location.href = "index.html"; 
    } catch (error) {
        console.error("Помилка при відправці на сервер:", error);
    }
});