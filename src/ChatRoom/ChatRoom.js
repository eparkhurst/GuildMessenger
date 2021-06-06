import 'firebase/firestore';
import { useState } from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore';

function ChatRoom({firestore}){
  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt').limit(25);
  const [messages] = useCollectionData(query, {idField: 'id'})

  const [newMessage, updateMessage] = useState('')

  const onSend = async () => {
    await messagesRef.add({
      text: newMessage,
      createdAt: Date.now(),
    })
    updateMessage('')
    
  }
  return (
    <div>
        {messages && messages.map(msg => <p>{msg.text}</p>)}
        <div>
          <input value={newMessage} onChange={(e)=> {
            updateMessage(e.target.value);
            
          }}></input>
          <button onClick={onSend}>Send</button>
        </div>
    </div>
  )
}

export default ChatRoom;