import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PrimaryButton from './PrimaryButton';
import {
    incrementQuantity,
    decrementQuantity,
    removeFromCart
} from './redux/actions';

function Cart() {
    const items = useSelector((state) => state.items);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const totalSum = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

    if (items.length === 0) {
        return (
            <main className="cart-page">
                <h2 className="cart-title">Кошик</h2>
                <div className="cart-empty">
                    <p>Ваш кошик порожній.</p>
                    <PrimaryButton
                        text="Перейти до каталогу"
                        onClick={() => navigate('/catalog')}
                    />
                </div>
            </main>
        );
    }

    return (
        <main className="cart-page">
            <h2 className="cart-title">Кошик</h2>

            <div className="cart-list">
                {items.map((item) => (
                    <div key={`${item.id}-${item.color}`} className="cart-item">
                        <div className="cart-item-image">Фото</div>

                        <div className="cart-item-info">
                            <h3>{item.title}</h3>
                            <p className="cart-item-color">Колір: {item.color}</p>
                            <p className="cart-item-unit-price">Ціна за шт.: {item.price} грн</p>
                        </div>

                        <div className="cart-item-controls">
                            <button
                                className="qty-btn"
                                onClick={() => dispatch(decrementQuantity(item.id, item.color))}
                            >
                                -
                            </button>
                            <span className="qty-value">{item.quantity}</span>
                            <button
                                className="qty-btn"
                                onClick={() => dispatch(incrementQuantity(item.id, item.color))}
                            >
                                +
                            </button>
                        </div>

                        <div className="cart-item-subtotal">
                            {item.price * item.quantity} грн
                        </div>

                        <button
                            className="remove-btn"
                            onClick={() => dispatch(removeFromCart(item.id, item.color))}
                        >
                            Видалити
                        </button>
                    </div>
                ))}
            </div>

            <div className="cart-summary">
                <div className="cart-total">
                    Загальна сума: <span>{totalSum} грн</span>
                </div>
                <div className="cart-actions">
                    <PrimaryButton
                        text="← Повернутися до каталогу"
                        onClick={() => navigate('/catalog')}
                    />
                    <PrimaryButton
                        text="Оформити замовлення"
                        onClick={() => alert(`Замовлення на суму ${totalSum} грн оформлено!`)}
                    />
                </div>
            </div>
        </main>
    );
}

export default Cart;