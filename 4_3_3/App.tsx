// 4_3_3 Fix an interval that fires twice
/*
  Этот компонент Counter отображает счетчик, который должен увеличиваться каждую секунду. При монтировании он вызывает setInterval. Это заставляет функцию onTick выполняться каждую секунду. Функция onTick увеличивает счетчик.

  Однако вместо того, чтобы увеличиваться один раз в секунду, она увеличивается дважды. Почему так происходит? Найдите причину ошибки и исправьте ее.
*/
import { useState } from 'react';
import Counter from './Counter.tsx';

export default function Form() {
  const [show, setShow] = useState(false);
  return (
    <>
      <button onClick={() => setShow(s => !s)}>{show ? 'Hide' : 'Show'} counter</button>
      <br />
      <hr />
      {show && <Counter />}
    </>
  );
}
