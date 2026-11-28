import { useState, useContext } from 'react';
import ItemCard from './ItemCard';
import Loader from './Loader';
import { MetersContext } from './MetersContext';

function Catalog() {
    const { meters, isLoading, selectedCategory, setSelectedCategory } = useContext(MetersContext);

    const [searchText, setSearchText] = useState("");

    const filteredMeters = meters.filter((meter) => {
        const cleanSearchText = searchText.toLowerCase().replaceAll(' ', '');
        const cleanMeterTitle = meter.title.toLowerCase().replaceAll(' ', '');
        return cleanMeterTitle.includes(cleanSearchText);
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

            {isLoading ? (
                <Loader />
            ) : (
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
            )}
        </main>
    );
}

export default Catalog;