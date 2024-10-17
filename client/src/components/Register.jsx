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
    e.preventDefault();
    if (userData.password !== userData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.msg);
        return;
      }

      // store token and redirect to dashboard
      localStorage.setItem('token', data.token);
      window.location = '/dashboard';
    } catch (err) {
      console.error(err);
      setError('Registration failed. Try again.');
    }
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
