import './App.css';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


firebase.initializeApp({
  apiKey: "AIzaSyCFnE2WurJNqROEf7HqK5e-NfCu7kdMpqQ",
    authDomain: "guildmessenger-354ac.firebaseapp.com",
    projectId: "guildmessenger-354ac",
    storageBucket: "guildmessenger-354ac.appspot.com",
    messagingSenderId: "892289199455",
    appId: "1:892289199455:web:5a4df0a8a9ed98310e9aea",
    measurementId: "G-22VWKPZESC"
})

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Guild Messenger
      </header>
    </div>
  );
}

export default App;
