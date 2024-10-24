import { useState } from 'react';
import InputField from './InputField';
import CustomButton from './CustomButton';

const Login = () => {
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
    <form
      className="flex flex-col w-full gap-8 mb-4"
      onSubmit={handleSubmit}
      method="post"
    >
      <InputField
        name="email"
        type="email"
        placeholder="Enter email"
        onChange={handleChange}
      />
      <InputField
        name="password"
        type="password"
        placeholder="Enter password"
        onChange={handleChange}
      />

      {error && <p style={{ color: 'red' }}>{error}</p>}
      <CustomButton label="Log in" type="primary" />
    </form>
  );
};

export default Login;
