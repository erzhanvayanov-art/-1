import { useState } from 'react';
import { foods, filterItems, Item } from './data';

export default function FilterableList() {
  const [query, setQuery] = useState('');

  // Используем filterItems из data.ts
  const filteredItems = filterItems(foods, query);

  return (
    <>
      <label>
        Search:{' '}
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </label>
      <hr />
      <List items={filteredItems} />
    </>
  );
}

function List({ items }: { items: Item[] }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {items.map(food => (
          <tr key={food.id}>
            <td>{food.name}</td>
            <td>{food.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}