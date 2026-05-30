import { useState } from 'react';
import { initialLetters, LetterType } from './data.js';
import Letter from './Letter.js';

export default function MailClient() {
    const [letters, setLetters] = useState(initialLetters);
    const [highlightedLetterId, setHighlightedLetterId] = useState<number | null>(null);

    function handleHover(letter: LetterType) {
        setHighlightedLetterId(letter.id);
    }

    function handleStar(starred: LetterType) {
        setLetters(letters.map(letter => {
            if (letter.id === starred.id) {
                return {
                    ...letter,
                    isStarred: !letter.isStarred
                };
            } else {
                return letter;
            }
        }));
    }

    return (
        <>
            <h2>Inbox</h2>
            <ul>
                {letters.map(letter => (
                    <Letter
                        key={letter.id}
                        letter={letter}
                        isHighlighted={
                            letter.id === highlightedLetterId
                        }
                        onHover={handleHover}
                        onToggleStar={handleStar}
                    />
                ))}
            </ul>
        </>
    );
}