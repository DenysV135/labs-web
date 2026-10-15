const urlParams = new URLSearchParams(window.location.search);
const id = parseInt(urlParams.get("id"));
const currentName = urlParams.get("name");
const currentValue = urlParams.get("value");
const currentStatus = urlParams.get("isWorking") === "true";

const urlmain = "http://127.0.0.1:8000";

document.getElementById("nameInput").value = currentName;
document.getElementById("valueInput").value = currentValue;
document.getElementById("statusCheckbox").checked = currentStatus;

const form = document.getElementById("createForm");

form.addEventListener("submit", async function(event) {
    event.preventDefault();
    const updatedItem = {
        id: id,
        name: document.getElementById("nameInput").value,
        value: parseFloat(document.getElementById("valueInput").value),
        isWorking: document.getElementById("statusCheckbox").checked
    };

    try {
        await fetch(`${urlmain}/api/items/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedItem)
        });

        alert("Показник успішно оновлено!");
        window.location.href = "index.html"; 
    } catch (error) {
        console.error("Помилка:", error);
    }
});