import { useState } from 'react';
import InputField from './InputField';
import CustomButton from './CustomButton';

const Register = () => {
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
    <form
      className="flex flex-col w-full gap-8 mb-4"
      onSubmit={handleSubmit}
      method="post"
    >
      <InputField
        name="name"
        type="text"
        placeholder="Enter name"
        onChange={handleChange}
      />
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
      <InputField
        name="confirmPassword"
        type="password"
        placeholder="Confirm Password"
        onChange={handleChange}
      />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <CustomButton label="Sign up" type="primary" />
    </form>
  );
};

export default Register;
