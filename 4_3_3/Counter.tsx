// Counter.tsx
import { useState, useEffect, useRef } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    // Сохраняем интервал в ref, чтобы иметь доступ к очистке
    intervalRef.current = window.setInterval(() => {
      setCount(prev => prev + 1);
    }, 1000);

    // Очищаем интервал при размонтировании
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, []); // Пустой массив зависимостей

  return <h1>{count}</h1>;
}