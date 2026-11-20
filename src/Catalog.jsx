import { useState } from 'react';
import ItemCard from './ItemCard';

function Catalog() {
    const initialMeters = [
        { id: 1, title: "OptiWater 300", desc: "Ультразвуковий лічильник води з імпульсним виходом.", price: 1200, category: "water" },
        { id: 2, title: "OptiGas Pro", desc: "Мембранний лічильник газу з термокорекцією.", price: 2500, category: "gas" },
        { id: 3, title: "OptiVolt Smart", desc: "Багатотарифний електролічильник день/ніч.", price: 1800, category: "electric" },
        { id: 4, title: "OptiHeat 500", desc: "Лічильник тепла з Wi-Fi модулем.", price: 3200, category: "electric" }
    ];

    const [meters, setMeters] = useState(initialMeters);

    const [searchText, setSearchText] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("all");

    const filteredMeters = meters.filter((meter) => {
        const matchCategory = selectedCategory === "all" || meter.category === selectedCategory;
        
        const cleanSearchText = searchText.toLowerCase().replaceAll(' ', '');
        const cleanMeterTitle = meter.title.toLowerCase().replaceAll(' ', '');
        const matchSearch = cleanMeterTitle.includes(cleanSearchText);

        return matchCategory && matchSearch;
    });
    
    return (
        <main className="catalog-page">
            <h2 className="catalog-title">Каталог лічильників</h2>
            
            <div className="catalog-filters">
                <input 
                    type="text" 
                    placeholder="Пошук за назвою..." 
                    className="search-input"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                />
                <select 
                    className="category-select"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                >
                    
                    <option value="all">Всі категорії</option>
                    <option value="water">Вода</option>
                    <option value="gas">Газ</option>
                    <option value="electric">Електроенергія</option>
                </select>
            </div>

            <div className="catalog-grid">
                {filteredMeters.map((meter) => (
                    <ItemCard 
                        key={meter.id}
                        id={meter.id}
                        title={meter.title} 
                        desc={meter.desc} 
                        price={meter.price} 
                    />
                ))}

                {filteredMeters.length === 0 && (
                    <p style={{ gridColumn: '1 / -1', textAlign: 'center', color: '#666' }}>
                        За вашим запитом нічого не знайдено.
                    </p>
                )}
                
            </div>
        </main>
    );
}

export default Catalog;