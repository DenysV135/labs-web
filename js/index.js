import { counters } from './data.js'


const itemsContainer = document.getElementById('itemsContainer');
const sortBtn = document.getElementById('sortBtn');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const totalMetric = document.getElementById('totalMetric');

function rendercounters(items) {
    itemsContainer.innerHTML = '';

    const htmlCardsArray = items.map(function ({ name, value, isWorking }) {

        const editUrl = `edit.html?name=${encodeURIComponent(name)}&value=${value}`;
        return `
            <div class = "element">
                <h3>${name}</h3>
                <p>Показник: ${value}</p>
                <p>Статус: ${isWorking ? "Працює" : "Вимкнений"}</p>
                <a href="${editUrl}" class="nav-tabs return">Редагувати</a>
                <button class = "Btn delete">Delete</button>
            </div>
        `;
    });
    itemsContainer.insertAdjacentHTML('beforeend', htmlCardsArray.join(''));

    const totalSum = items.reduce(function (accum, item) {
        return accum + item.value
    }, 0);
    totalMetric.textContent = totalSum;
}

rendercounters(counters);

searchBtn.addEventListener('click', function () {
    const searchText = searchInput.value.toLowerCase().replaceAll(' ', '');
    const filteredCounters = counters.filter(function (item) {
        return item.name.toLowerCase().includes(searchText)
    })
    rendercounters(filteredCounters);
})

sortBtn.addEventListener('click', function () {
    const searchText = searchInput.value.toLowerCase().replaceAll(' ', '');
    const currentCounters = counters.filter(function (item) {
        return item.name.toLocaleLowerCase().includes(searchText);
    })
    const sortedCounters = currentCounters.sort(function (a, b) {
        return a.value - b.value;
    });
    rendercounters(sortedCounters);
});