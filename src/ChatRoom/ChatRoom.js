import 'firebase/firestore';

import { useCollectionData } from 'react-firebase-hooks/firestore';

function ChatRoom({firestore}){
  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt').limit(25);
  const [messages] = useCollectionData(query, {idField: 'id'})
  return (
    <div>
        {messages && messages.map(msg => <p>{msg.text}</p>)}
    </div>
  )
}

export default ChatRoom;