import { useState } from 'react';

export default function App() {
  const [reverse, setReverse] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  if (reverse) {
    return (
      <>
        <Field
          label="Last name"
          value={lastName}
          onChange={setLastName}
        />
        <Field
          label="First name"
          value={firstName}
          onChange={setFirstName}
        />
        <label>
          <input
            type="checkbox"
            checked={reverse}
            onChange={e => setReverse(e.target.checked)}
          />
          Reverse order
        </label>
      </>
    );
  } else {
    return (
      <>
        <Field
          label="First name"
          value={firstName}
          onChange={setFirstName}
        />
        <Field
          label="Last name"
          value={lastName}
          onChange={setLastName}
        />
        <label>
          <input
            type="checkbox"
            checked={reverse}
            onChange={e => setReverse(e.target.checked)}
          />
          Reverse order
        </label>
      </>
    );
  }
}

function Field({
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
      {label}:{' '}
      <input
        type="text"
        value={value}
        placeholder={label}
        onChange={e => onChange(e.target.value)}
      />
    </label>
  );
}