// myUseReducer.ts
import { useState } from 'react';

export function useReducer<T, A>(
    reducer: (state: T, action: A) => T,
    initialState: T
): [T, (action: A) => void] {
    const [state, setState] = useState<T>(initialState);

    const dispatch = (action: A) => {
        const nextState = reducer(state, action);
        setState(nextState);
    };

    return [state, dispatch];
}