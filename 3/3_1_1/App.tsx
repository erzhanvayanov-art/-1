import { useState } from 'react';  // ← добавить импорт!

export default function Picture() {
    const [isPictureActive, setIsPictureActive] = useState(false);

    function handleBackgroundClick() {
        setIsPictureActive(false);
    }

    function handlePictureClick(e: React.MouseEvent) {
        e.stopPropagation();
        setIsPictureActive(true);
    }

    return (
        <div
            className={`background ${!isPictureActive ? 'background--active' : ''}`}
            onClick={handleBackgroundClick}
        >
            <img
                className={`picture ${isPictureActive ? 'picture--active' : ''}`}
                alt="Rainbow houses in Kampung Pelangi, Indonesia"
                src="/5qwVYb1.jpg"
                onClick={handlePictureClick}
            />
        </div>
    );
}