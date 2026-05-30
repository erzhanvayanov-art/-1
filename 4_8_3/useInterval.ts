// useInterval.ts
import { useEffect, useRef } from 'react';

export function useInterval(callback: () => void, delay: number) {
    const savedCallback = useRef(callback);

    // Сохраняем актуальный callback
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    // Устанавливаем интервал
    useEffect(() => {
        if (delay !== null) {
            const id = setInterval(() => {
                savedCallback.current();
            }, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
}