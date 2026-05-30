// messengerReducer.ts
export type Contact = {
    id: number;
    name: string;
    email: string;
}

export type State = {
    selectedId: number;
    message: string;
}

export const initialState: State = {
    selectedId: 0,
    message: 'Hello',  // ← изменили с '' на 'Hello'
};

export type Action =
    | { type: 'changed_selection'; contactId: number }
    | { type: 'sent_message'; message: string }
    | { type: 'edited_message'; message: string };

export function messengerReducer(state: State, action: Action): State {
    switch (action.type) {
        case 'changed_selection':
            return {
                ...state,
                selectedId: action.contactId,
                message: '',
            };
        case 'sent_message':
            return {
                ...state,
                message: '',
            };
        case 'edited_message':
            return {
                ...state,
                message: action.message,
            };
        default:
            return state;
    }
}