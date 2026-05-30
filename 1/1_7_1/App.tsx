import { people } from './data.js';
import { getImageUrl } from './utils.js';

export type Person = {
    id: number;
    name: string;
    profession: string;
    accomplishment: string;
    imageId: string;
}

export default function List() {
    // Фильтруем химиков
    const chemists = people.filter(person => person.profession === 'chemist');

    // Фильтруем всех остальных (не химиков)
    const others = people.filter(person => person.profession !== 'chemist');

    return (
        <article>
            <h1>Scientists</h1>

            <h2>Chemists</h2>
            <ul>
                {chemists.map(person => (
                    <li key={person.id}>
                        <img
                            src={getImageUrl(person)}
                            alt={person.name}
                        />
                        <p>
                            <b>{person.name}:</b>
                            {' ' + person.profession + ' '}
                            known for {person.accomplishment}
                        </p>
                    </li>
                ))}
            </ul>

            <h2>Everyone Else</h2>  {/* ← изменили с "Others" на "Everyone Else" */}
            <ul>
                {others.map(person => (
                    <li key={person.id}>
                        <img
                            src={getImageUrl(person)}
                            alt={person.name}
                        />
                        <p>
                            <b>{person.name}:</b>
                            {' ' + person.profession + ' '}
                            known for {person.accomplishment}
                        </p>
                    </li>
                ))}
            </ul>
        </article>
    );
}q