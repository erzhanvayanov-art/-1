import { useState, useRef } from 'react';

export default function Chat() {
  const [text, setText] = useState('');
  const [isSending, setIsSending] = useState(false);
  const timeoutIDRef = useRef<number | null>(null);

  function handleSend() {
    setIsSending(true);
    timeoutIDRef.current = setTimeout(() => {
      alert('Отправлено!');
      setIsSending(false);
      timeoutIDRef.current = null;
    }, 3000);
  }

  function handleUndo() {
    if (timeoutIDRef.current !== null) {
      clearTimeout(timeoutIDRef.current);
      timeoutIDRef.current = null;
    }
    setIsSending(false);
  }

  return (
    <>
      <input
        disabled={isSending}
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button
        disabled={isSending}
        onClick={handleSend}>
        {isSending ? 'Отправляем...' : 'Отправить'}
      </button>
      {isSending &&
        <button onClick={handleUndo}>
          Отменить
        </button>
      }
    </>
  );
}