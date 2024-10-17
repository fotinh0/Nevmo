import React, { useState } from 'react';

const Dashboard = () => {
  const [balance, setBalance] = useState(0);

  //TODO:
  // Fetch account data / transaction
  // Deposit/withdraw money
  // Transfer money

  return (
    <div>
      <h2>Your Balance: ${balance}</h2>
    </div>
  );
};

export default Dashboard;
