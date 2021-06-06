
function SignIn({ auth, firebase }) {
  const signIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };
  return (
    <div>
      <button onClick={signIn}>Sign in with Google</button>
    </div>
  );
}

export default SignIn;
