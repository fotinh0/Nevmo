import { useState } from 'react';

const Register = ({ setShowSignUp }) => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setUserData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    // TODO: handle register
  };

  return (
    <div className="form-container">
      <h2>Sign Up</h2>
      <form className="form" onSubmit={handleSubmit} method="post">
        <input
          name="name"
          type="text"
          placeholder="Name"
          onChange={handleChange}
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          onChange={handleChange}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
        />
        <input
          name="confirmPassword"
          type="password"
          placeholder="Confirm Password"
          onChange={handleChange}
        />
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Sign Up</button>
      </form>
      <a onClick={() => setShowSignUp(false)}>Login</a>
    </div>
  );
};

export default Register;
