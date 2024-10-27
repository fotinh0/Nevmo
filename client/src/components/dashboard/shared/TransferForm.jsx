import { useState } from 'react';

const TransferForm = () => {
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
    console.log('Transferring:', transferData);
  };

  return (
    <form
      className="space-y-4 p-4 bg-white shadow-md rounded-lg max-w-3xl mx-auto text-center"
      onSubmit={handleSubmit}
    >
      <h3 className="text-lg font-semibold">Transfer Money</h3>
      <select
        name="fromAccount"
        onChange={handleChange}
        className="w-full p-2 border rounded-lg"
        required
      >
        <option value="">Select From Account</option>
      </select>
      <select
        name="toAccount"
        onChange={handleChange}
        className="w-full p-2 border rounded-lg"
        required
      >
        <option value="">Select To Account</option>
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
        className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-200"
      >
        Transfer
      </button>
    </form>
  );
};

export default TransferForm;
