import { useState, useEffect } from 'react';

export default function Timer() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('✅ Creating an interval');
        const id = setInterval(() => {
            console.log('⏰ Interval tick');
            setCount(c => c + 1); // ← используем функциональное обновление
        }, 1000);
        return () => {
            console.log('❌ Clearing an interval');
            clearInterval(id);
        };
    }, []); // ← пустой массив зависимостей

    return <h1>Counter: {count}</h1>;
}