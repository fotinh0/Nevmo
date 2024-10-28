import { useState } from 'react';
import { useOutletContext } from 'react-router-dom';

const DepositForm = () => {
  const { userData } = useOutletContext();
  const [depositData, setDepositData] = useState({ amount: '' });

  const handleChange = (e) => {
    setDepositData({ ...depositData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle deposit + validation
    console.log('Depositing:', depositData);
  };

  return (
    <form
      className="space-y-4 p-4 bg-white shadow-md rounded-lg text-center max-w-3xl mx-auto"
      onSubmit={handleSubmit}
    >
      <h3 className="text-lg font-semibold">Deposit Money</h3>
      <select
        name="fromAccount"
        onChange={handleChange}
        className="w-full p-2 border rounded-lg"
        required
      >
        <option value="">Select Account</option>
        {userData.accounts.map((account, index) => {
          return (
            <option key={index} value={account.id}>
              {account.name}
            </option>
          );
        })}
      </select>
      <input
        type="number"
        name="amount"
        placeholder="Amount"
        value={depositData.amount}
        onChange={handleChange}
        className="w-full p-2 border rounded-lg"
        required
      />
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-200"
      >
        Deposit
      </button>
    </form>
  );
};

export default DepositForm;
