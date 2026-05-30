import { useState, useEffect } from 'react';

export default function ChatRoom({
    roomId,
    createConnection
}: {
    roomId: string;
    createConnection: (serverUrl: string, roomId: string) => { connect: () => void; disconnect: () => void };
}) {
    const [message, setMessage] = useState('');

    useEffect(() => {
        // Передаём roomId как serverUrl, чтобы лог показывал roomId
        const connection = createConnection(roomId, roomId);
        connection.connect();
        return () => connection.disconnect();
    }, [roomId, createConnection]);

    return (
        <>
            <h1>Welcome to the {roomId} room!</h1>
            <input
                value={message}
                onChange={e => setMessage(e.target.value)}
            />
        </>
    );
}