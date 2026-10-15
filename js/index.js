const itemsContainer = document.getElementById('itemsContainer');
const sortBtn = document.getElementById('sortBtn');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const totalMetric = document.getElementById('totalMetric');
const urlmain = "http://127.0.0.1:8000";

let counters = [];

function rendercounters(items) {
    itemsContainer.innerHTML = '';
    const htmlCardsArray = items.map(function ({ id, name, value, isWorking }) {
        const editUrl = `edit.html?id=${id}&name=${encodeURIComponent(name)}&value=${value}&isWorking=${isWorking}`;

        return `
            <div class="element">
                <h3>${name}</h3>
                <p>Показник: ${value}</p>
                <p>Статус: ${isWorking ? "Працює" : "Вимкнений"}</p>
                <a href="${editUrl}" class="nav-tabs return">Редагувати</a>
                <!-- Додаємо виклик функції deleteItem(id) при кліку -->
                <button class="Btn delete" onclick="deleteItem(${id})">Delete</button>
            </div>
        `;
    });

    itemsContainer.insertAdjacentHTML('beforeend', htmlCardsArray.join(''));

    const totalSum = items.reduce(function (accum, item) {
        return accum + Number(item.value);
    }, 0);
    totalMetric.textContent = totalSum;
}

searchBtn.addEventListener('click', function () {
    const searchText = searchInput.value;
    fetchItems(searchText, false);
});

sortBtn.addEventListener('click', function () {
    const searchText = searchInput.value;
    fetchItems(searchText, true);
});

window.deleteItem = async function(id) {
    try {
        await fetch(`${urlmain}/api/items/${id}`, {
            method: 'DELETE'
        });
        fetchItems();
    } catch (error) {
        console.error("Помилка видалення:", error);
    }
};

async function fetchItems(searchQuery = "", sortByValue = false) {
    try {
        let url = `${urlmain}/api/items?`;

        if (searchQuery) {
            url += `search=${encodeURIComponent(searchQuery)}&`;
        }
        if (sortByValue) {
            url += `sort=true`;
        }
        const response = await fetch(url);
        counters = await response.json();
        rendercounters(counters);
    } catch (error) {
        console.error("Помилка при завантаженні даних:", error);
    }
}

async function deleteItem(id) {
    try {
        await fetch(`${urlmain}/api/items/${id}`, {
            method: 'DELETE'
        });
        fetchItems();
    } catch (error) {
        console.error("Помилка видалення:", error);
    }
}

fetchItems();