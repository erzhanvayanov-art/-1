import { useState } from 'react';
import { letters } from './data.js';
import Letter from './Letter.js';

export default function MailClient() {
  // Используем Set для хранения выбранных ID
  const [selectedIds, setSelectedIds] = useState<Set<number>>(new Set());

  const selectedCount = selectedIds.size;

  function handleToggle(toggledId: number) {
    setSelectedIds(prevSelectedIds => {
      const newSelectedIds = new Set(prevSelectedIds);
      if (newSelectedIds.has(toggledId)) {
        newSelectedIds.delete(toggledId);
      } else {
        newSelectedIds.add(toggledId);
      }
      return newSelectedIds;
    });
  }

  return (
    <>
      <h2>Inbox</h2>
      <ul>
        {letters.map(letter => (
          <Letter
            key={letter.id}
            letter={letter}
            isSelected={selectedIds.has(letter.id)}
            onToggle={handleToggle}
          />
        ))}
        <hr />
        <p>
          <b>
            You selected {selectedCount} letters
          </b>
        </p>
      </ul>
    </>
  );
}