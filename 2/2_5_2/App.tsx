export type Que = number | ((n: number) => number);

export function getFinalState(baseState: number, queue: Que[]): number {
    let state = baseState;

    for (let item of queue) {
        if (typeof item === 'number') {
            // Число заменяет состояние
            state = item;
        } else {
            // Функция преобразует текущее состояние
            state = item(state);
        }
    }

    return state;
}