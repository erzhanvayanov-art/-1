// 4_8_1 Extract a useCounter Hook
/*
  Этот компонент использует переменную состояния и Эффект для отображения числа, которое увеличивается каждую секунду. Извлеките эту логику в пользовательский хук под названием useCounter. Ваша цель состоит в том, чтобы реализация компонента Counter выглядела именно так:
  
  import { useCounter } from "./useCounter";

  export default function Counter() {
    const count = useCounter();
    return <h1>Seconds passed: {count}</h1>;
  }

*/

import { useState, useEffect } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      setCount(c => c + 1);
    }, 1000);
    return () => clearInterval(id);
  }, []);
  return <h1>Seconds passed: {count}</h1>;
}
