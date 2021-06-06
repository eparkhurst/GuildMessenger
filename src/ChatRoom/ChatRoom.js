import 'firebase/firestore';
import { useState } from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import './ChatRoom.css';

function ChatRoom({ firestore, user }) {
  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt').limit(25);
  const [messages] = useCollectionData(query, { idField: 'id' });

  const [newMessage, updateMessage] = useState('');

  const onSend = async () => {
    await messagesRef.add({
      text: newMessage,
      createdAt: Date.now(),
      uid: user.uid,
    });
    updateMessage('');
  };

  return (
    <div className="ChatRoom">
      <div className="MessageBox">
        {messages &&
          messages.map((msg) => (
            <p key={msg.id} className={msg.uid === user.uid ? 'UserText' : 'RegularText'}>
              {msg.text}
            </p>
          ))}
      </div>
      <div>
        <input
          value={newMessage}
          placeholder="send a message"
          onChange={(e) => {
            updateMessage(e.target.value);
          }}
        ></input>
        <button onClick={onSend}>Send</button>
      </div>
    </div>
  );
}

export default ChatRoom;
