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
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    dispatch({
      type: 'sent_message',
      message: message,  // отправляем текущее сообщение
    });
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
      <form onSubmit={handleSubmit}>
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