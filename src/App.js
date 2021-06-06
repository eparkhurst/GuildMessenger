// import './App.css';
import firebase from 'firebase/app';
import 'firebase/firestore';

import ChatRoom from './ChatRoom';

firebase.initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
  measurementId: process.env.REACT_APP_measurementId,
});
const firestore = firebase.firestore();

function App() {
  return (
    <div className="App">
      <header className="App-header">Guild Messenger</header>
      <section>
        <ChatRoom firestore={firestore}/>
      </section>
    </div>
  );
}

export default App;
