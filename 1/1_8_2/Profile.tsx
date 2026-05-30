import { useState } from 'react';
import { getImageUrl } from './utils';
import { Person } from './App';

export default function Profile({ person }: { person: Person }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div>
      <h2>{person.name}</h2>
      <button onClick={() => setIsExpanded(!isExpanded)}>
        {isExpanded ? 'Collapse' : 'Expand'}
      </button>
      {isExpanded && (
        <div>
          <img
            src={getImageUrl(person)}
            alt={person.name}
            width={100}
            height={100}
          />
          <p>{person.name}</p>
        </div>
      )}
    </div>
  );
}