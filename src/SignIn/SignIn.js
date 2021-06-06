import firebase from 'firebase/app';
import 'firebase/firestore';

function SignIn({ auth }) {
  const signIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };
  return (
    <div>
      <button onClick={signIn}>Hello</button>
    </div>
  );
}

export default SignIn;
