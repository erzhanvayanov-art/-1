// processQueue.ts
export type Que = number | ((n: number) => number);

export function getFinalState(baseState: number, queue: Que[]): number {
    let state = baseState;

    for (let item of queue) {
        if (typeof item === 'number') {
            state = item;
        } else {
            state = item(state);
        }
    }

    return state;
}