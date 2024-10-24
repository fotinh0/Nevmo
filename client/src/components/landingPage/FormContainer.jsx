import Register from './Register';
import Login from './Login';
import CustomButton from './CustomButton';

const FormContainer = ({ showSignUp, setShowSignUp }) => {
  const label = showSignUp ? 'Sign up' : 'Log in';
  return (
    <div className="flex flex-col items-center mx-auto my-0 max-w-md border border-solid border-[#dbd8d0] rounded p-14">
      <h1 className="text-3xl text-sky-blue font-bold italic">nevmo</h1>
      <h2 className="text-2xl my-8">{label}</h2>

      {showSignUp ? <Register /> : <Login />}
      <CustomButton
        label={!showSignUp ? 'Sign up' : 'Log in'}
        onClick={() => {
          setShowSignUp(!showSignUp);
        }}
        type="tertiary"
      />
    </div>
  );
};

export default FormContainer;
