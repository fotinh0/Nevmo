import { useState } from 'react';
import Login from './Login';
import Register from './Register';

const LandingPage = () => {
  const [showSignUp, setShowSignUp] = useState(false);
  return (
    <>
      {showSignUp ? (
        <Register setShowSignUp={setShowSignUp} />
      ) : (
        <Login setShowSignUp={setShowSignUp} />
      )}
    </>
  );
};

export default LandingPage;
