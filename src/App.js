// import './App.css';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import ChatRoom from './ChatRoom';
import SignIn from './SignIn';

import { useAuthState } from 'react-firebase-hooks/auth';

firebase.initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
  measurementId: process.env.REACT_APP_measurementId,
});

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header className="App-header">Guild Messenger</header>
      <section>
        {user ? <ChatRoom firestore={firestore}/> : <SignIn auth={auth} />}
      </section>
    </div>
  );
}

export default App;
