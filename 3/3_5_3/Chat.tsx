// Chat.tsx
import { Contact } from './messengerReducer';

export default function Chat({
  contact,
  message,
  dispatch
}: {
  contact: Contact;
  message: string;
  dispatch: (action: any) => void;
}) {
  function handleSendMessage(e: React.FormEvent) {
    e.preventDefault();
    alert(`Sending message to ${contact.email}: "${message}"`);
    dispatch({ type: 'sent_message' });
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    dispatch({
      type: 'edited_message',
      message: e.target.value,
    });
  }

  return (
    <section>
      <h2>{contact.name}</h2>
      <form onSubmit={handleSendMessage}>
        <input
          value={message}
          onChange={handleChange}
          placeholder={`Chat to ${contact.name}`}
        />
        <button type="submit">Send</button>
      </form>
      <p>Draft: {message}</p>
    </section>
  );
}