import { useParams, useNavigate } from 'react-router-dom';
import PrimaryButton from './PrimaryButton';

function ItemPage() {
    const { id } = useParams(); 
    const navigate = useNavigate();

    const allMeters = [
        { id: 1, title: "OptiWater 300", desc: "Ультразвуковий лічильник води з імпульсним виходом.", price: 1200 },
        { id: 2, title: "OptiGas Pro", desc: "Мембранний лічильник газу з термокорекцією.", price: 2500 },
        { id: 3, title: "OptiVolt Smart", desc: "Багатотарифний електролічильник день/ніч.", price: 1800 },
        { id: 4, title: "OptiHeat 500", desc: "Лічильник тепла з Wi-Fi модулем.", price: 3200 }
    ];

    const item = allMeters.find((meter) => meter.id === Number(id));

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
                
                <div style={{ maxWidth: '500px' }}>
                    <h1 className='itemTitle'>{item.title}</h1>
                    <p className='itemDesc'>
                        {item.desc}
                    </p>
                    <div className='priceItemCard'>
                        {item.price} грн
                    </div>
                    
                    <PrimaryButton text="Додати в кошик" onClick={() => alert('Товар додано!')} />
                </div>
            </div>
        </main>
    );
}

export default ItemPage;