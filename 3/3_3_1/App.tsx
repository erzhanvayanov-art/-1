import { useState } from 'react';

export default function SyncedInputs() {
  const [text, setText] = useState('');

  return (
    <>
      <Input
        label="First input"
        value={text}
        onChange={setText}
      />
      <Input
        label="Second input"
        value={text}
        onChange={setText}
      />
      <div>
        <span>Synchronized value:</span> {text}
      </div>
    </>
  );
}

function Input({
  label,
  value,
  onChange
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <label>
      {label}
      {' '}
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </label>
  );
}