import { useState } from 'react';

export default function App() {
  const [showHint, setShowHint] = useState(false);
  const [text, setText] = useState('');

  return (
    <div>
      {showHint && (
        <p>
          <i>Hint: Your favorite city?</i>
        </p>
      )}
      <textarea
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button onClick={() => setShowHint(!showHint)}>
        {showHint ? 'Hide hint' : 'Show hint'}
      </button>
    </div>
  );
}