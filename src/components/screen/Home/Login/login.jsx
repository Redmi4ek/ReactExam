import React from 'react';
import { useFirebaseAuth } from 'react-firebase-auth';

const AuthButton = () => {
  const {
    user,
    signOut,
    signInWithGoogle,
    signInWithGitHub // Добавьте другие методы входа, если нужно
  } = useFirebaseAuth();

  return (
    <div className="auth-button">
      {user ? (
        <button onClick={signOut}>Выход</button>
      ) : (
        <div>
          <button onClick={signInWithGoogle}>Вход с Google</button>
          <button onClick={signInWithGitHub}>Вход с GitHub</button>
        </div>
      )}
      {user && <div>Привет, {user.displayName}</div>}
    </div>
  );
};

export default AuthButton;
