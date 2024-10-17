import { useState } from 'react';

const Login = ({ setShowSignUp }) => {
  const [userData, setUserData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setUserData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/auth/login', {
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

      // Store token and redirect to dashboard
      localStorage.setItem('token', data.token);
      window.location = '/dashboard';
    } catch (err) {
      console.error(err);
      setError('Login failed. Please check your credentials.');
    }
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
      <form className="form" onSubmit={handleSubmit} method="post">
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
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Login</button>
      </form>
      <a
        onClick={() => {
          setShowSignUp(true);
        }}
      >
        Sign Up
      </a>
    </div>
  );
};

export default Login;
