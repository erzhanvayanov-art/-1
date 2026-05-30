// messengerReducer.ts
export type Contact = {
    id: number;
    name: string;
    email: string;
}

export type State = {
    selectedId: number;
    message: string;  // сообщение для текущего выбранного контакта
    drafts: Record<number, string>;  // сохранённые черновики для всех контактов
}

export const initialState: State = {
    selectedId: 0,
    message: 'Hello',
    drafts: {
        0: 'Hello',
        1: '',
        2: '',
    },
};

export type Action =
    | { type: 'changed_selection'; contactId: number }
    | { type: 'edited_message'; message: string }
    | { type: 'sent_message' };

export function messengerReducer(state: State, action: Action): State {
    switch (action.type) {
        case 'changed_selection':
            // Сохраняем текущее сообщение в drafts перед переключением
            return {
                ...state,
                drafts: {
                    ...state.drafts,
                    [state.selectedId]: state.message,
                },
                selectedId: action.contactId,
                message: state.drafts[action.contactId] || '',
            };
        case 'edited_message':
            return {
                ...state,
                message: action.message,
            };
        case 'sent_message':
            return {
                ...state,
                message: '',
                drafts: {
                    ...state.drafts,
                    [state.selectedId]: '',
                },
            };
        default:
            return state;
    }
}