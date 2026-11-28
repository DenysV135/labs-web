import { useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PrimaryButton from './PrimaryButton';
import Loader from './Loader';
import { MetersContext } from './MetersContext';

function ItemPage() {
    const { id } = useParams();
    const navigate = useNavigate();

    const { meters, isLoading } = useContext(MetersContext);

    const [color, setColor] = useState("Білий");
    const [quantity, setQuantity] = useState(1);

    const handleQuantityChange = (e) => {
        const value = Number(e.target.value);
        setQuantity(value < 1 ? 1 : value);
    };

    if (isLoading) {
        return (
            <main className="item-page" style={{ padding: '40px 100px' }}>
                <Loader />
            </main>
        );
    }

    const item = meters.find((meter) => meter.id === Number(id));

    if (!item) {
        return (
            <main style={{ padding: '40px 100px', textAlign: 'center' }}>
                <h2>Товар не знайдено</h2>
                <PrimaryButton text="Повернутися до каталогу" onClick={() => navigate('/catalog')} />
            </main>
        );
    }

    return (
        <main className="item-page" style={{ padding: '40px 100px' }}>
            <div className='imageItemBox'>
                <PrimaryButton text="← Назад" onClick={() => navigate(-1)} />

                <div className='imageItem'>
                    Фото товару
                </div>

                <div style={{ maxWidth: '500px', textAlign: 'left' }}>
                    <h1 className='itemTitle'>{item.title}</h1>
                    <p className='itemDesc'>
                        {item.desc}
                    </p>

                    <div className="item-options">
                        <div className="option-group">
                            
                                <div className="option-group">
                                    <label>Колір:</label>
                                    <div className="color-picker">
                                        <button
                                            type="button"
                                            className={`color-btn white ${color === "Білий" ? "active" : ""}`}
                                            onClick={() => setColor("Білий")}
                                            title="Білий"
                                        />
                                        <button
                                            type="button"
                                            className={`color-btn gray ${color === "Сірий" ? "active" : ""}`}
                                            onClick={() => setColor("Сірий")}
                                            title="Сірий"
                                        />
                                        <button
                                            type="button"
                                            className={`color-btn blue ${color === "Синій" ? "active" : ""}`}
                                            onClick={() => setColor("Синій")}
                                            title="Синій"
                                        />
                                    </div>
                                </div>
                        </div>

                        <div className="option-group">
                            <label htmlFor="item-quantity">Кількість:</label>
                            <input
                                id="item-quantity"
                                type="number"
                                min="1"
                                className="option-input"
                                value={quantity}
                                onChange={handleQuantityChange}
                            />
                        </div>
                    </div>

                    <div className='priceItemCard'>
                        {item.price * quantity} грн
                    </div>

                    <PrimaryButton
                        text="Додати в кошик"
                        onClick={() => alert(`Додано: ${item.title}\nКолір: ${color}\nКількість: ${quantity} шт.`)}
                    />
                </div>
            </div>
        </main>
    );
}

export default ItemPage;