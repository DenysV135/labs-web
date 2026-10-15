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
    event.preventDefault();
    const searchText = searchInput.value.toLowerCase().replaceAll(' ', '');
    const filteredCounters = counters.filter(function (item) {
        return item.name.toLowerCase().replaceAll(' ', '').includes(searchText)
    });
    rendercounters(filteredCounters);
});

sortBtn.addEventListener('click', function () {
    event.preventDefault();
    const searchText = searchInput.value.toLowerCase().replaceAll(' ', '');
    const currentCounters = counters.filter(function (item) {
        return item.name.toLocaleLowerCase().replaceAll(' ', '').includes(searchText);
    });
    const sortedCounters = currentCounters.sort(function (a, b) {
        return a.value - b.value;
    });
    rendercounters(sortedCounters);
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

async function fetchItems() {
    try {
        if (searchQuery) {
            url += `search=${encodeURIComponent(searchQuery)}&`;
        }
        if (sortByValue) {
            url += `sort=true`;
        }
        const response = await fetch(`${urlmain}/api/items`);
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