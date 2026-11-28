import { createContext, useState, useEffect } from 'react';
import { fetchMeters } from './api';

export const MetersContext = createContext();

export function MetersProvider({ children }) {
    const [meters, setMeters] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState("all");

    useEffect(() => {
        const loadMeters = async () => {
            setIsLoading(true);
            try {
                const data = await fetchMeters(selectedCategory);
                setMeters(data);
            } catch (error) {
                console.error("Помилка при завантаженні товарів:", error);
            } finally {
                setIsLoading(false);
            }
        };

        loadMeters();
    }, [selectedCategory]);

    return (
        <MetersContext.Provider value={{ meters, isLoading, selectedCategory, setSelectedCategory }}>
            {children}
        </MetersContext.Provider>
    );
}