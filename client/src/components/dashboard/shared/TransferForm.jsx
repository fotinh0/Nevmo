import { useState } from 'react';
import { useOutletContext } from 'react-router-dom';

const TransferForm = () => {
  const { userData } = useOutletContext();
  const [transferData, setTransferData] = useState({
    fromAccount: '',
    toAccount: '',
    amount: '',
  });

  const handleChange = (e) => {
    setTransferData({ ...transferData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: handle transfer + validation
    console.log('Transferring:', transferData);
  };

  return (
    <form
      className="space-y-4 p-4 bg-white shadow-md rounded-lg max-w-3xl mx-auto text-center"
      onSubmit={handleSubmit}
    >
      <h1 className="text-2xl font-semibold">Transfer Money</h1>
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
      <select
        name="toAccount"
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
        value={transferData.amount}
        onChange={handleChange}
        className="w-full p-2 border rounded-lg"
        required
      />
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 w-full sm:w-32 rounded-lg hover:bg-blue-600 transition-colors duration-200"
      >
        Transfer
      </button>
    </form>
  );
};

export default TransferForm;
