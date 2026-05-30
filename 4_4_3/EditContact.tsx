import { useState } from 'react';
import { ContactType } from './ContactManager';

export default function EditContact({
  savedContact,
  onSave
}: {
  savedContact: ContactType;
  onSave: (data: ContactType) => void;
}) {
  const [name, setName] = useState(savedContact.name);
  const [email, setEmail] = useState(savedContact.email);

  function handleReset() {
    setName(savedContact.name);
    setEmail(savedContact.email);
  }

  return (
    <div key={savedContact.id}>  {/* ← добавляем key здесь для теста */}
      <label>
        Name:{' '}
        <input
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </label>
      <label>
        Email:{' '}
        <input
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </label>
      <button onClick={handleReset}>Reset</button>
      <button onClick={() => onSave({ ...savedContact, name, email })}>
        Save
      </button>
    </div>
  );
}