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

  const handleRequest = () => {
    // Handle request
    // TODO: handle payment function
    console.log('Requesting money: ', payData);
  };

  const handlePay = () => {
    // Handle payment
    // TODO: handle request function
    console.log('Paying: ', payData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: handle action + validation
    const action = e.nativeEvent.submitter.name;
    action === 'pay' ? handlePay() : handleRequest();
  };

  return (
    <form
      className="space-y-4 p-4 bg-white shadow-md rounded-lg text-center max-w-3xl mx-auto"
      onSubmit={handleSubmit}
    >
      <h1 className="text-2xl font-semibold">Pay & Request</h1>
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
      <div className="flex gap-8 justify-center flex-wrap">
        <button
          type="submit"
          name="pay"
          className="bg-blue-500 text-white py-2 px-4 w-full rounded-full hover:bg-blue-600 transition-colors duration-200 sm:w-32"
        >
          Pay
        </button>
        <button
          type="submit"
          name="request"
          className="bg-blue-500 text-white py-2 px-4 w-full rounded-full hover:bg-blue-600 transition-colors duration-200 sm:w-32"
        >
          Request
        </button>
      </div>
    </form>
  );
};

export default PayForm;
