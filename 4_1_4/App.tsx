import { useState, useRef, useEffect } from 'react';

export default function Chat() {
  const [text, setText] = useState('');
  const textRef = useRef(text);

  // Обновляем ref при каждом изменении text
  useEffect(() => {
    textRef.current = text;
  }, [text]);

  function handleSend() {
    setTimeout(() => {
      alert('Sending: ' + textRef.current);
    }, 3000);
  }

  return (
    <>
      <input
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button
        onClick={handleSend}>
        Send
      </button>
    </>
  );
}