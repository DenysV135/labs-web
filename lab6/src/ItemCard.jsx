import { useState } from 'react';
import PrimaryButton from './PrimaryButton';
import { useNavigate } from 'react-router-dom';

function ItemCard({ id, title, desc, price }) {
    const navigate = useNavigate();
    const [color, setColor] = useState("Білий");
    const [quantity, setQuantity] = useState(1);

    const handleQuantityChange = (e) => {
        const value = Number(e.target.value);
        setQuantity(value < 1 ? 1 : value);
    };

    return (
        <div className="item-card">
            <div className="item-image-placeholder">Фото лічильника</div>
            <div className="item-details">
                <h3>{title}</h3>
                <p>{desc}</p>

                <div className="card-options">
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

                    <div className="option-group">
                        <label htmlFor={`qty-${id}`}>Кількість:</label>
                        <input
                            id={`qty-${id}`}
                            type="number"
                            min="1"
                            className="option-input"
                            value={quantity}
                            onChange={handleQuantityChange}
                        />
                    </div>
                </div>

                <div className="item-price">{price} грн</div>
            </div>
            <PrimaryButton
                text="Детальніше"
                onClick={() => navigate(`/catalog/${id}`)}
            />
        </div>
    );
}

export default ItemCard;