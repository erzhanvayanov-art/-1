import { useState, useEffect } from 'react';
import { fetchBio } from './api.ts';

export default function Page() {
  const [person, setPerson] = useState('Alice');
  const [bio, setBio] = useState<string | null>(null);

  useEffect(() => {
    let ignore = false;  // ← флаг отмены

    setBio(null);

    fetchBio(person).then(result => {
      if (!ignore) {  // ← обновляем только если запрос всё ещё актуален
        setBio(result);
      }
    });

    return () => {
      ignore = true;  // ← при следующем изменении person помечаем старый запрос как устаревший
    };
  }, [person]);

  return (
    <>
      <select value={person} onChange={e => {
        setPerson(e.target.value);
      }}>
        <option value="Alice">Alice</option>
        <option value="Bob">Bob</option>
        <option value="Taylor">Taylor</option>
      </select>
      <hr />
      <p><i>{bio ?? 'Loading...'}</i></p>
    </>
  );
}