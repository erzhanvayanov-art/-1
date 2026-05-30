// ContactList.tsx
import { Contact } from './messengerReducer';

export default function ContactList({
    contacts,
    selectedId,
    dispatch
}: {
    contacts: Contact[];
    selectedId: number;
    dispatch: (action: any) => void;
}) {
    return (
        <section>
            <ul>
                {contacts.map(contact => (
                    <li key={contact.id}>
                        <button
                            onClick={() => {
                                dispatch({
                                    type: 'changed_selection',
                                    contactId: contact.id,
                                });
                            }}>
                            {contact.name}
                        </button>
                    </li>
                ))}
            </ul>
        </section>
    );
}