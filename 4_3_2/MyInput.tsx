// MyInput.tsx
import { useEffect, useRef } from 'react';

export default function MyInput({
  value,
  onChange,
  shouldFocus
}: {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  shouldFocus?: boolean;
}) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (shouldFocus && inputRef.current) {
      inputRef.current.focus();
    }
  }, [shouldFocus]);

  return (
    <input
      ref={inputRef}
      value={value}
      onChange={onChange}
    />
  );
}