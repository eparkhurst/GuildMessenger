// import './App.css';
import firebase from 'firebase/app';
import 'firebase/firestore';

import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyCFnE2WurJNqROEf7HqK5e-NfCu7kdMpqQ",
  authDomain: "guildmessenger-354ac.firebaseapp.com",
  projectId: "guildmessenger-354ac",
  storageBucket: "guildmessenger-354ac.appspot.com",
  messagingSenderId: "892289199455",
  appId: "1:892289199455:web:5a4df0a8a9ed98310e9aea",
  measurementId: "G-22VWKPZESC"
});
const firestore = firebase.firestore();

function App() {
  return (
    <div className="App">
      <header className="App-header">Guild Messenger</header>
      <section>
        <ChatRoom /> 
      </section>
    </div>
  );
}

function ChatRoom(){
  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt').limit(25);
  const [messages] = useCollectionData(query, {idField: 'id'})
  return (
    <div>
        {messages && messages.map(msg => <p>{msg.text}</p>)}
    </div>
  )
}

export default App;
