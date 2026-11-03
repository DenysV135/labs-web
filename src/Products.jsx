import React from 'react';
import PrimaryButton from './PrimaryButton';

function Features() {
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
            <div className="view-more-container">
                <PrimaryButton text="View more" />
            </div>
        </section>
    );
}

export default Features;