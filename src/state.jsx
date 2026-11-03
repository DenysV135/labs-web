import { useState } from 'react';

export default function MeterCounter() {
    const [reading, setReading] = useState (0);
    const handleIncrease = () => {
        setReading(prevReading => prevReading + 1);
    };

    return (
        <div>
            <h2>Поточний показник: {reading}</h2>
            <button onClick={handleIncrease}>
                Збільшити показник
            </button>
        </div>
    );
}