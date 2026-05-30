import { useState } from 'react';

export default function RequestTracker() {
    const [pending, setPending] = useState(0);
    const [completed, setCompleted] = useState(0);

    async function handleClick() {
        // Используем функциональное обновление для pending
        setPending(prevPending => prevPending + 1);

        await delay(3000);

        // Используем функциональное обновление для обоих счетчиков
        setPending(prevPending => prevPending - 1);
        setCompleted(prevCompleted => prevCompleted + 1);
    }

    return (
        <>
            <h3>Отложенные: {pending}</h3>
            <h3>Выполненные: {completed}</h3>
            <button onClick={handleClick}>Купить</button>
        </>
    );
}

function delay(ms: number) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}