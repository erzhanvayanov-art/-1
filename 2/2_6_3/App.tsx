import { useImmer } from 'use-immer';
import Background from './Background';
import Box from './Box';

export type Position = { x: number; y: number };

const initialPosition = {
    x: 0,
    y: 0,
};

export default function Canvas() {
    // ✅ Заменяем useState на useImmer
    const [shape, setShape] = useImmer({
        color: 'orange',
        position: initialPosition,
    });

    function handleMove(dx: number, dy: number) {
        // ✅ С Immer можно безопасно мутировать!
        setShape(draft => {
            draft.position.x += dx;
            draft.position.y += dy;
        });
    }

    function handleColorChange(e: any) {
        // Для цвета тоже можно использовать Immer
        setShape(draft => {
            draft.color = e.target.value;
        });
    }

    return (
        <>
            <select
                value={shape.color}
                onChange={handleColorChange}
            >
                <option value="orange">orange</option>
                <option value="lightpink">lightpink</option>
                <option value="aliceblue">aliceblue</option>
            </select>
            <Background position={initialPosition} />
            <Box
                color={shape.color}
                position={shape.position}
                onMove={handleMove}
            >
                Drag me!
            </Box>
        </>
    );
}