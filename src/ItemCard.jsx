import PrimaryButton from './PrimaryButton';
import { useNavigate } from 'react-router-dom';

function ItemCard({id, title, desc, price }) {
    const navigate = useNavigate();
    
    return (
        <div className="item-card">
            <div className="item-image-placeholder">Фото лічильника</div>
            <div className="item-details">
                <h3>{title}</h3>
                <p>{desc}</p>
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