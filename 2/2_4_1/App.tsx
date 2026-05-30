import { useState } from 'react';

export default function TrafficLight() {
    const [walk, setWalk] = useState(true);

    function handleClick() {
        // Используем точные фразы, которые ожидает тест
        if (walk) {
            alert('Stop is next');   // ← а не 'Next stop'
        } else {
            alert('Walk is next');   // ← а не 'Next will walk'
        }

        setWalk(!walk);
    }

    return (
        <>
            <button onClick={handleClick}>
                Change to {walk ? 'Stop' : 'Walk'}
            </button>
            <h1
                style={{
                    color: walk ? 'darkgreen' : 'darkred',
                }}
            >
                {walk ? 'Walk' : 'Stop'}
            </h1>
        </>
    );
}