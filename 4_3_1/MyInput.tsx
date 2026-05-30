import { useLayoutEffect, useRef } from 'react';

export default function MyInput({ value, onChange }: {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
    const inputRef = useRef<HTMLInputElement>(null);

    useLayoutEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

    return (
        <input
            ref={inputRef}
            value={value}
            onChange={onChange}
        />
    );
}