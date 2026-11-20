
import { useState } from 'react';
import PrimaryButton from './PrimaryButton';

function Features() {
    const [showMore, setShowMore] = useState(false);

    const toggleShowMore = () => {
        setShowMore(!showMore);
    };

    const cards = [
        {
            id: 1,
            title: "Лічильники води",
            desc: "Високоточні ультразвукові та механічні прилади з імпульсним виходом."
        },
        {
            id: 2,
            title: "Лічильники газу",
            desc: "Надійні побутові та промислові рішення з автоматичною термокорекцією."
        },
        {
            id: 3,
            title: "Електролічильники",
            desc: "Багатотарифні розумні лічильники з прямою передачею даних у систему."
        }
    ];

    return (
        <section className="products-section">
            <div className="products-grid">
                {cards.map((card) => (
                    <div key={card.id} className="feature-card">
                        <h3>{card.title}</h3>
                        <p>{card.desc}</p>
                    </div>
                ))}
            </div>

            {showMore && (
                <div className="extra-info">
                    <h3>Ексклюзивна технологія ColdGuard</h3>
                    <p>
                        Наші системи не лише рахують показники, а й можуть інтегруватися з IoT-рішеннями, 
                        забезпечуючи безперебійний моніторинг навіть під час відключень електроенергії. 
                        Це ідеальне рішення для бізнесу та дому.
                    </p>
                </div>
            )}

            <div className="view-more-container">
                <PrimaryButton text= {showMore ? "Сховати" : "View more"} onClick={toggleShowMore}/>
            </div>
        </section>
    );
}

export default Features;