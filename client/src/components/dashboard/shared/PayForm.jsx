import { useState } from 'react';

const PayForm = () => {
  const [payData, setPayData] = useState({
    recipientEmail: '',
    amount: '',
    description: '',
  });

  const handleChange = (e) => {
    setPayData({ ...payData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Paying:', payData);
  };

  return (
    <form
      className="space-y-4 p-4 bg-white shadow-md rounded-lg text-center max-w-3xl mx-auto"
      onSubmit={handleSubmit}
    >
      <h3 className="text-lg font-semibold">Pay & Request</h3>
      <input
        type="email"
        name="recipientEmail"
        placeholder="Recipient's Email"
        value={payData.recipientEmail}
        onChange={handleChange}
        className="w-full p-2 border rounded-lg"
        required
      />
      <input
        type="number"
        name="amount"
        placeholder="Amount"
        value={payData.amount}
        onChange={handleChange}
        className="w-full p-2 border rounded-lg"
        required
      />
      <textarea
        name="description"
        placeholder="What's this for?"
        value={payData.description}
        onChange={handleChange}
        className="w-full p-2 border rounded-lg"
        required
      />
      <button
        type="submit"
        name="pay"
        className="mx-4 bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition-colors duration-200 min-w-32"
      >
        Pay
      </button>
      <button
        type="submit"
        name="request"
        className="mx-2 bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition-colors duration-200 min-w-32"
      >
        Request
      </button>
    </form>
  );
};

export default PayForm;
