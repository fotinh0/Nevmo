import { useState } from 'react';
import FormContainer from './FormContainer';

const LandingPage = () => {
  const [showSignUp, setShowSignUp] = useState(false);
  return (
    <>
      <FormContainer showSignUp={showSignUp} setShowSignUp={setShowSignUp} />
    </>
  );
};

export default LandingPage;
